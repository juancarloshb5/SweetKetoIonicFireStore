import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductPageComponent } from './components/product/product-page/product-page.component';

const routes: Routes = [

  {path: 'store', component: OrdersComponent},
  {path: 'login', component: LoginComponent},

  {path: 'product', component: ProductPageComponent, children: [
    {path: '', component: ProductCreateComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
