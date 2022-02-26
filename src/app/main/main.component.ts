import { filter, mapTo, startWith, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { BehaviorSubject, ObservableInput } from 'rxjs';
import { TABLE_CONFIG } from './main.config';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PeopleService, CarsService, Person, Car, PersonDto } from '../api';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { omit } from 'lodash';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tapCatch } from '../shared/util/custom-rxjs';
import { formatISO } from 'date-fns';

@UntilDestroy()
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  form = new FormGroup({
    query: new FormControl(),
    date: new FormControl(),
  });
  controls = {
    query: this.form.get('query') as FormControl,
    date: this.form.get('date') as FormControl,
  };

  columns = TABLE_CONFIG;
  poeple$ = new BehaviorSubject<Person[]>([]);
  loading$ = new BehaviorSubject<boolean>(true);
  cars: Car[];

  constructor(
    private peopleService: PeopleService,
    private carsService: CarsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.controls.date.valueChanges.pipe(
      startWith(this.controls.date.value),
      tap(() => this.loading$.next(true)),
      switchMap((date: Date) =>
        date
          ? this.peopleService.personControllerFindQuery(
              null,
              null,
              null,
              null,
              formatISO(date, { representation: 'date' })
            )
          : this.peopleService.personControllerFindQuery()
      ),
      tap(people => this.poeple$.next(people)),
      tapCatch(() => this.loading$.next(false)),
      untilDestroyed(this)
    ).subscribe();

    this.carsService.carControllerFind().subscribe(cars => this.cars = cars);
  }

  onTableClick(event) {
    const person = omit(event.row, 'id');
    const id = event.row.id;
    switch (event.column.prop) {
      case 'edit':
        const dialogRef = this.dialog.open(DialogComponent, { data: person });
        dialogRef.afterClosed().pipe(
          tap(() => this.loading$.next(true)),
          switchMap<Person, ObservableInput<Person>>(person => this.peopleService.personControllerPatch(event.row.id, person).pipe(mapTo(person))),
          withLatestFrom(this.poeple$),
          tap((([person, people]) => {
            const index = people.findIndex(person => person.id === id);
            people[index] = { ...person, id};
            this.poeple$.next([...people]);
          })),
          tapCatch(() => this.loading$.next(false)),
        ).subscribe();
        break;
      case 'delete':
        this.loading$.next(true)
        this.peopleService.personControllerDelete(id).pipe(
          withLatestFrom(this.poeple$),
          tap((([_, people]) => {
            const index = people.findIndex(person => person.id === id);
            people.splice(index, 1);
            this.poeple$.next([...people]);
          })),
          tapCatch(() => this.loading$.next(false)),
        ).subscribe();
        break;
    }
  }

  openNewPersonDialog() {
    const person: PersonDto = { birthDate: '', email: '', firstName: '', gender: 'male', lastName: '' };
    const dialogRef = this.dialog.open(DialogComponent, { data: person });
    dialogRef.afterClosed().pipe(
      filter(Boolean),
      switchMap((person: PersonDto) => this.peopleService.personControllerCreate(person)),
      withLatestFrom(this.poeple$),
      tap((([person, people]) => this.poeple$.next(people.concat(person)))),
      untilDestroyed(this)
    ).subscribe();
  }
}
