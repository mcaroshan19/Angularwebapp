import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategortRequest } from '../model/add-category-request-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'https://localhost:7169/api/categories'; // https://localhost:7169/swagger/index.html
  constructor(private http: HttpClient) {}

  addCategory(category: AddCategortRequest): Observable<AddCategortRequest> {
    return this.http.post<AddCategortRequest>(this.apiUrl, category);
  }

}

