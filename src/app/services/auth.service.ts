import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { UserTokenModel } from '../models/userTokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userRole!:UserTokenModel;
  apiUrl = 'https://localhost:7119/api/Auth/'
  constructor(private httpClient: HttpClient) { 
    
  }
  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login", loginModel)
  }
  loginUserInfo(token: string): UserTokenModel {
    this.userRole = JSON.parse(atob(token.split('.')[1])) as UserTokenModel
    return this.userRole
  }
  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true;
    }
    else {
      return false;
    }
  }
}