import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { Image } from 'src/app/models/image';
import { CategoryService } from 'src/app/services/category.service';
import { ImageService } from 'src/app/services/image.service';
import { ProductService } from 'src/app/services/products.service';
import { HomePageProduct } from 'src/app/models/homePageProduct';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: HomePageProduct[] = [];
  categories: Category[] = [];
  setProduct: Product;
  dataLoaded = false;
  filterText = "";

  constructor(
    private productService: ProductService, 
    private categoryService: CategoryService,) {
  }
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  images = [
    ("./assets/image/fiber.jpg"),
    ("./assets/image/paratoner.jpg"),
    ("./assets/image/electric.jpg"),
    ("./assets/image/camera.jpg")

  ]

  getProducts() {
    this.productService.getHomePageProduct().subscribe(response => {
      this.products = response.data
      this.dataLoaded = true;
    })
  }
  getCategories() {
    this.categoryService.getCategory1().subscribe(response => {
      this.categories = response.data
    })
  }
  setCurrentProduct(product: Product) {
    this.setProduct = product
  }

}
