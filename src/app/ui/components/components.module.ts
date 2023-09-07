import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailModule } from './product-detail/product-detail.module';



@NgModule({
  declarations: [
  
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    ProductDetailModule
  ],
  exports:[]
})
export class ComponentsModule { }
