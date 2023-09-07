import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:7119/api/Products/';
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl + 'getall');
  }
  add(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", product)
  }
  getProductDetail(id: number): Observable<SingleResponseModel<Product>> {
    let newPath = this.apiUrl + "getbyid?productId=" + id
    return this.httpClient.get<SingleResponseModel<Product>>(newPath);
  }
}
