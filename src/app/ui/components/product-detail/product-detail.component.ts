import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerProduct } from 'src/app/models/customerProduct';
import { Image } from 'src/app/models/image';
import { Product } from 'src/app/models/product';
import { ImageService } from 'src/app/services/image.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: CustomerProduct;
  images:Image[];
  dataLoaded = false;
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private imageService:ImageService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getProductDetail(params["id"])
      this.getProductImage(params["id"])
    })
    
  }
  getProductDetail(id: number) {
    this.productService.getProductDetail(id).subscribe(response => {
      this.product = response.data
      this.dataLoaded = true

    })
  }
  getProductImage(productId:number){
    this.imageService.getProductImage(productId).subscribe(response =>{
      this.images=response.data
      this.dataLoaded = true
    })
  }
}
