import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      this.getProductDetail(params["id"])
    })
  }
  getProductDetail(id: number) {
    this.productService.getProductDetail(id).subscribe(response => {
      console.log(response)
      this.product = response.data

    })
  }
}
