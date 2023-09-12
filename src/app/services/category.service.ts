import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:7119/api/Categories/';
  constructor(private httpClient: HttpClient) { }
  getCategory1(): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl+'getall');
  }
  getCategory2(categoryId:number): Observable<ListResponseModel<Category>> {
    let newPath = this.apiUrl + "geybyparentid2?parentId=" + categoryId
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }
  getCategory3(categoryId:number): Observable<ListResponseModel<Category>> {
    let newPath = this.apiUrl + "geybyparentid3?parentId=" + categoryId
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }
}