import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../Models/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _urlUserAPI = environment.urlApi;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._urlUserAPI + `/users`);
  }
}
