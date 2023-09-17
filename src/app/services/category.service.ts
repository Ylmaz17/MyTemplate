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
  mainCatgeory(): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl+'getall');
  }
  subcategoryOne(categoryId:number): Observable<ListResponseModel<Category>> {
    let newPath = this.apiUrl + "geybyparentidsubcategoryone?parentId=" + categoryId
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }
  subcategoryTwo(categoryId:number): Observable<ListResponseModel<Category>> {
    let newPath = this.apiUrl + "geybyparentidsubcategorytwo?parentId=" + categoryId
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }
}