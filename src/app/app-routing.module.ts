import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductImagesComponent } from './components/product-images/product-images.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductListaComponent } from './components/product/product-lista/product-lista.component';
import { ProductPageComponent } from './components/product/product-page/product-page.component';

const routes: Routes = [

  {path: 'store', component: OrdersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'images', component: ProductImagesComponent},

  {path: 'register', component: RegisterComponent},

  {path: 'product', component: ProductPageComponent, children: [
    {path: '', component: ProductListaComponent},
    {path: 'create', component: ProductCreateComponent},

  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
