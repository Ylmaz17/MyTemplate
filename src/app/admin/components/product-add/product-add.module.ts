import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './product-add.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductAddComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ProductAddComponent}
    ]),
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports:[
  ]
})
export class ProductAddModule { }
