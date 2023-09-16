import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryDetailComponent } from './category-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoryDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: "", component: CategoryDetailComponent
    }])
  ]
})
export class CategoryDetailModule { }
