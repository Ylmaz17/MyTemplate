import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http'
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products.service';
//import { ProductResponseModel } from 'src/app/models/produtcResponseModel';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
    });
  }
}



  // apiUrl ='https://localhost:7119/api/Products/getall'

  // constructor(private productService:ProductService,private httpClient:HttpClient ,private spinner : NgxSpinnerService){}
  // ngOnInit(): void {
  //   this.spinner.show();
  //   setTimeout(() => {
  //     /** spinner ends after 5 seconds */
  //     this.spinner.hide();
  //   }, 5000);
  // }
  // getProducts() {
  //   this.productService.getProducts().subscribe((response) => {
  //     this.products = response.data;
  //   });
  // }
  // }
