import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategortRequest } from '../model/add-category-request-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

//  apiUrl = 'https://localhost:7169/api/Categories'; 
  constructor(private http: HttpClient) {}

  // addCategory(category: AddCategortRequest): Observable<AddCategortRequest> {
  //   return this.http.post<AddCategortRequest>(this.apiUrl, category);
  // }
  addCategory(category: AddCategortRequest): Observable<void> {
    return this.http.post<void>('https://localhost:7169/api/Categories', category);
  }


}

