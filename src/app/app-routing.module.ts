import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { DashboardModule } from './admin/components/dashboard/dashboard.module';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "", component: DashboardComponent },
      {path:'dashboard',loadChildren:()=>import("./admin/components/dashboard/dashboard.module").then(module=>DashboardModule)},
      { path: "customers", loadChildren: () => import("./admin/components/customers/customers.module").then(module => module.CustomersModule) },
      { path: "orders", loadChildren: () => import("./admin/components/orders/orders.module").then(module => module.OrdersModule) },
      {path:"products",loadChildren:()=>import("./admin/components/products/products.module").then(module=>module.ProductsModule)}
    ]
  },
  { path: '', component: HomeComponent },
  {path:'home',loadChildren:()=>import('./ui/components/home/home.module').then(module=>module.HomeModule)},
  {path:'products',loadChildren:()=>import('./ui/components/products/products.module').then(module=>module.ProductsModule)},
  {path:'category',loadChildren:()=>import('./ui/components/category/category.module').then(module=>module.CategoryModule)}

  //{path:'category',loadChildren:()=>import('./ui/components/category/category.module').then(module=>module.CategoryModule)}
  //{ path: 'products', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
