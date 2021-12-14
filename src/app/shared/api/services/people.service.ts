import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  url = environment.apiUrl + 'people/';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }

  getPeopleByTime(id: number): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.url}/${id}`);
  }
}
