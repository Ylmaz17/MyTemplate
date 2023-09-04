import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlertifyService, MessageType } from 'src/app/services/alertify.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private productService: ProductService, private toastrService: ToastrService,
    private alertifyService: AlertifyService, private router: Router) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ["", Validators.required],
      productCode: ["", Validators.required],
      barcode: ["", Validators.required],
      unitPrice: ["", Validators.required],
      stock: ["", Validators.required],
      taxRate: ["", Validators.required],
      //added date
      brand: ["", Validators.required],
      status: ["", Validators.required],
      description: ["", Validators.required],
      image: ["", Validators.required],
      categoryId: ["", Validators.required],

    })
  }
  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.add(productModel).subscribe({
        next: (response) => {
          this.toastrService.success(response.message, 'Ürün başarıyla eklendi');
          this.router.navigateByUrl('admin/products')
        },
        error: (responseError) => {
          if (responseError.error.Message != null) {
            this.toastrService.error(responseError.error.Message)
          } else {
            if (responseError.error.isSuccess == false) {

              this.toastrService.error(responseError.error.message)
            }
            else {
              if (responseError.error.Errors.length > 0) {
                for (let i = 0; i < responseError.error.Errors.length; i++) {
                  this.toastrService.error(
                    responseError.error.Errors[i].ErrorMessage,
                    'Hatalı alanları düzeltiniz'
                  );
                }
              }
            }
          }
        }
      });
    } else {
      this.toastrService.warning('Eksik bilgileri doldurunuz', 'Dikkat');
    }
  }
}

