import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  createUser(user: Partial<User>) {
    return this.http.post<User>(this._urlUserAPI + `/users`,user);
  }

  editUser(user: User):Observable<User> {
    return this.http.put<User>(this._urlUserAPI + `/users/${user.id}`,user);
  }

  deleteUser(userId: number) {
    return this.http.delete(this._urlUserAPI + `/users/${userId}`);
  }
}
