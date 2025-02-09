import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { CustomerProduct } from '../models/customerProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:7119/api/Products/';
  
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl + 'getall');
  }
  
  add(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", product)
  }

  getProductDetail(id: number): Observable<SingleResponseModel<CustomerProduct>> {
    let newPath = this.apiUrl + "getbyproductdetail?productId=" + id
    return this.httpClient.get<SingleResponseModel<CustomerProduct>>(newPath);
  }

  getHomePageProduct():Observable<ListResponseModel<CustomerProduct>>{
    return this.httpClient.get<ListResponseModel<CustomerProduct>>(this.apiUrl+'getallcustomerproduct')
  }

  getAllByCategoryId(categoryId:number):Observable<ListResponseModel<CustomerProduct>>{
    let newPath = this.apiUrl + "getallcategorypageproducts?categoryId=" + categoryId
    return this.httpClient.get<ListResponseModel<CustomerProduct>>(newPath)
  }
  
}
