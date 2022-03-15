import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://cooker123.herokuapp.com/api/recipes';
const newUrl = 'https://cooker123.herokuapp.com/api/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${newUrl}/${id}`);
  }
  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id, data): Observable<any> {
    return this.http.put(`${newUrl}/${id}`, data);
  }
  delete(id): Observable<any> {
    return this.http.delete(`${newUrl}/${id}`);
  }
}
