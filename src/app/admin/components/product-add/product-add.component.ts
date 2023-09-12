import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Category } from 'src/app/models/category';
import { AlertifyService, MessageType } from 'src/app/services/alertify.service';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';
import { ImageService } from 'src/app/services/image.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  selectedFile: File = null;
  a: File = null
  brands: Brand[];
  categories1: Category[];
  categories2: Category[];
  categories3: Category[];
  productAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService,
    private alertifyService: AlertifyService,
    private router: Router,
    private imageService: ImageService,
    private brandService: BrandService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.createProductAddForm();
    this.getAllBrand()
    this.getCategories()
  }
  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ["", Validators.required],
      productCode: ["", Validators.required],
      barcode: ["", [Validators.minLength(15), Validators.maxLength(15)]],
      unitPrice: ["",],
      stock: ["", [Validators.min(1)]],
      taxRate: ["",],
      //added date
      brand: ["", Validators.required],
      status: [true],
      description: [""],
      image: [""],
      categoryId1: ["",Validators.required],
      categoryId2: [""],
      categoryId3: [""],

    })
  }
  
  // idSelected1(event) {
  //   this.categoryIdSelected1 = this.productAddForm.get('category1').value
  //   console.log(this.categoryIdSelected1)
  //   this.getCategories2(this.categoryIdSelected1)
  // }
  // idSelected2(event) {
  //   this.categoryIdSelected2 = this.productAddForm.get('category2').value
  //   this.getCategories3(this.categoryIdSelected2)
  // }
  // idSelected3(event) {
  //   this.categoryIdSelected3 = this.productAddForm.get('category3').value
  //   console.log(this.categoryIdSelected3)
  // }
  getCategories() {
    this.categoryService.getCategory1().subscribe(response => {
      this.categories1 = response.data
      console.log(this.categories1)

    })
  }
  getCategories2() {
    this.categoryService.getCategory2(this.productAddForm.get('categoryId1').value).subscribe(response => {
      console.log(response.data)
      this.categories2 = response.data
    })
  }
  getCategories3() {
    this.categoryService.getCategory3(this.productAddForm.get('categoryId2').value).subscribe(response => {
      this.categories3 = response.data
    })
  }
  getAllBrand() {
    this.brandService.getBrand().subscribe((response) => {
      this.brands = response.data
      console.log(this.brands)
    })
  }
  onSelectedFile(event) {
    this.selectedFile = <File>event.target;
    this.a = <File>event.target.files[0];
  }
  addImage() {
    const formData = new FormData;
    formData.append('ImagePath', this.selectedFile)
    formData.append('file', this.a)
    this.imageService.add(formData).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (responseError) => {
        console.log('Hataa')
      }
    })
  }
  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      console.log(productModel)
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

