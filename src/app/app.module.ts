import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire'
import { AngularFirestoreModule} from '@angular/fire/firestore'
import { AngularFireStorageModule} from '@angular/fire/storage'
import { AngularFireAuthModule} from '@angular/fire/auth'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { OrdersComponent } from './components/orders/orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { ProductListaComponent } from './components/product/product-lista/product-lista.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { IonicModule } from '@ionic/angular';
import { ProductPageComponent } from './components/product/product-page/product-page.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProductImagesComponent } from './components/product-images/product-images.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderFormComponent,
    ProductFormComponent,
    ProductListaComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductPageComponent,
    RegisterComponent,
    LoginComponent,
    ProductImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
