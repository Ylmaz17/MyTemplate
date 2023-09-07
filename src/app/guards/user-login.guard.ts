import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserLoginGuard {
  router: any;
  constructor(private authService: AuthService,
    private toastrService: ToastrService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    var result = this.authService.loginUserInfo(localStorage.getItem('token'))
    //this.authService.isAuthenticated()
    if (result.role.includes('admin')) {
      return true;
    } else {
      this.router.navigate(["login"])
      this.toastrService.info("Sisteme giriş yapmalısınız")
      return false;
    }

  }
}