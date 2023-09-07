import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { DashboardModule } from './admin/components/dashboard/dashboard.module';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';
import { UserLoginGuard } from './guards/user-login.guard';

const routes: Routes = [
  {
    path: "admin", canActivate: [UserLoginGuard], component: LayoutComponent, children: [
      { path: "", component: DashboardComponent },
      {path:'dashboard',loadChildren:()=>import("./admin/components/dashboard/dashboard.module").then(module=>DashboardModule)},
      { path: "customers", loadChildren: () => import("./admin/components/customers/customers.module").then(module => module.CustomersModule) },
      { path: "orders", loadChildren: () => import("./admin/components/orders/orders.module").then(module => module.OrdersModule) },
      {path:"products",loadChildren:()=>import("./admin/components/products/products.module").then(module=>module.ProductsModule)},
      {path:"product-add",loadChildren:()=>import("./admin/components/product-add/product-add.module").then(module=>module.ProductAddModule)}
    ]
  },
  { path: '', component: HomeComponent },
  {path:'home',loadChildren:()=>import('./ui/components/home/home.module').then(module=>module.HomeModule)},
  {path:'products',loadChildren:()=>import('./ui/components/products/products.module').then(module=>module.ProductsModule)},
  {path:'category',loadChildren:()=>import('./ui/components/category/category.module').then(module=>module.CategoryModule)},
  {path:'login',loadChildren:()=>import('./ui/components/login/login.module').then(module=>module.LoginModule)},
  {path:'register',loadChildren:()=>import('./ui/components/register/register.module').then(module=>module.RegisterModule)},
  {path:'product-detail/:id',loadChildren:()=>import('./ui/components/product-detail/product-detail.module').then(module=>module.ProductDetailModule)},
  {path:'test',loadChildren:()=>import('./ui/components/test/test.module').then(module=>module.TestModule)}

,

  //{path:'category',loadChildren:()=>import('./ui/components/category/category.module').then(module=>module.CategoryModule)}
  //{ path: 'products', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
