import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../Models/models';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private _urlUserAPI = environment.urlApi;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this._urlUserAPI + `/categories`);
  }

  getCategoriesId(idCat: number): Observable<Category>{
    return this.http.get<Category>(this._urlUserAPI + `/categories/${idCat}`)
  }

  createCategory(category: Partial<Category>){
    return this.http.post<Category>(this._urlUserAPI + `/categories`, category)
  }

}
