import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tasks } from '../Models/models';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private _urlUserAPI = environment.urlApi;

  constructor(private http: HttpClient) { }

  getTasksUser(idUser: number): Observable<Tasks> {
    return this.http.get<Tasks>(this._urlUserAPI + `/todos?idUser=${idUser}`);
  }

  statusTaskUser(task: Tasks): Observable<Tasks> {
    return this.http.put<Tasks>(this._urlUserAPI + `/todos/${task.id}`, task)
  }

  editTaskUser(task: Tasks): Observable<Tasks> {
    return this.http.put<Tasks>(this._urlUserAPI + `/todos/${task.id}`, task);
  }

  deleteTask(taskId: number) {
    return this.http.delete(this._urlUserAPI + `/todos/${taskId}`);
  }

  createTask(task: Partial<Tasks>){
    return this.http.post<Tasks>(this._urlUserAPI + `/todos`,task);
  }

  filterTask(filter: number, idUser: number): Observable<Tasks> {
      return this.http.get<Tasks>(this._urlUserAPI + `/todos?idUser=${idUser}&category.id=${filter}`);
  }

}
