import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CustomerProduct } from 'src/app/models/customerProduct';
import { Product } from 'src/app/models/product';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  brands:Brand[];
  products : CustomerProduct[]=[];
  setProduct: Product;
  constructor(private productService: ProductService,private activatedRoute: ActivatedRoute,private brandService: BrandService) {}
ngOnInit(): void {
  this.activatedRoute.params.subscribe(params => {
    this.getProduct(params["id"])
    this.getAllBrand()
  })

}
getAllBrand(){
  this.brandService.getBrand().subscribe(response=>{
    this.brands =response.data
  })
}
getProduct(categoryId:number){
  this.productService.getAllByCategoryId(categoryId).subscribe(response=>{
    this.products = response.data
  })
}
setCurrentProduct(product: Product) {
  this.setProduct = product
  console.log(this.setProduct)
}
}
