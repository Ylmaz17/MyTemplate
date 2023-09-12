import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  product: Product;
  images:Image[];
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
      console.log(response)
      this.product = response.data

    })
  }
  getProductImage(productId:number){
    this.imageService.getProductImage(productId).subscribe(response =>{
      console.log(response.data[0].imagePath)
      this.images=response.data
    })
  }
}
