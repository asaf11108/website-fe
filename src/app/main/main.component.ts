import { PeopleService } from './../shared/api/services/people.service';
import { catchError, startWith, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { TABLE_CONFIG } from './main.config';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Person } from '../shared/api/model/person';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/components/dialog/dialog.component';
import { omit } from 'lodash';

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
  poeple$: Observable<Person[]>;
  loading$ = new BehaviorSubject<boolean>(true);

  constructor(private peopleService: PeopleService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.poeple$ = this.controls.date.valueChanges.pipe(
      startWith(this.controls.date.value),
      tap(() => this.loading$.next(true)),
      switchMap((date: Date) =>
        date
          ? this.peopleService.getPeopleByTime(new Date(Date.UTC(date.getFullYear(),date.getMonth(), date.getDate())).getTime())
          : this.peopleService.getPeople()
      ),
      tap(() => this.loading$.next(false)),
      catchError(err => {
        this.loading$.next(false);
        return throwError(err);
      })
    );
  }

  onTableClick(event) {
    switch (event.column.prop) {
      case 'edit':
        const person = omit(event.row, 'id');
        const dialogRef = this.dialog.open(DialogComponent, { data: person });
        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
        });
        break;
    }
  }
}
