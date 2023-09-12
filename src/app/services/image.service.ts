import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Image } from '../models/image';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  // apiUrl = 'https://localhost:7119/api/ProductImage/getbyproductid?productId=';
  apiUrl = 'https://localhost:7119/api/ProductImage/getall';

  constructor(private httpClient: HttpClient) { }
  addTest(imagetest: Image): Observable<ResponseModel> {
    console.log(this.httpClient.post<ResponseModel>('https://localhost:7119/api/ProductImage/add', imagetest))
    return this.httpClient.post<ResponseModel>('https://localhost:7119/api/ProductImage/add', imagetest)
  }
  add(formData:FormData):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>('https://localhost:7119/api/ProductImage/add',formData)
  }







  /* Home Page için*/
  getAllProductImage(productId: number): Observable<SingleResponseModel<Image>> {
    return this.httpClient.get<SingleResponseModel<Image>>(
      'https://localhost:7119/api/ProductImage/getbydistinctproductid?productId=' + productId)
  }
  getProductImage(productId: number): Observable<ListResponseModel<Image>> {
    let newpath = 'https://localhost:7119/api/ProductImage/getbyproductid?productId=' + productId
    return this.httpClient.get<ListResponseModel<Image>>(newpath)
  }
}
