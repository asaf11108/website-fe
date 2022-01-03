import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  url = environment.apiUrl + 'people';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

  getPersonByBirthDate(date: string): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.url}`, {
      params: { birthDate: date }
    });
  }

  postPerson(person: Partial<Person>) {
    return this.http.post<Person>(this.url, person);
  }

  patchPerson(id: number, person: Omit<Person, 'id'>) {
    return this.http.patch<void>(`${this.url}/${id}`, person);
  }

  deletePerson(id: number) {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
