import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	products: Product[] = [];
	categories: Category[] = [];

  dataLoaded = false;
  filterText="";
  constructor(private productService:ProductService,private categoryService:CategoryService ) {}
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
  pcimage = "./assets/image/pc.jpg"
  getProducts() {
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data
      this.dataLoaded = true;
    })   
  }
  getCategories() {
    this.categoryService.getCategories().subscribe(response=>{
      this.categories = response.data
    })   
  }

}
