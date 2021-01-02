import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductListaComponent } from '../components/product/product-lista/product-lista.component';
import { Product } from '../models/Product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFirestore) { }

  GetProducts() {
    this.db.collection('productos').valueChanges({idField: 'id'}).subscribe(Response => {
      console.log(Response);
      return Response;
    })
    }
    AddProduct(product: Product){
      return this.db.collection('productos').add(product);
    }
    Remove(producto: Product){
      this.db.collection('productos').doc(producto.id).delete().then(Response => {
        console.log(Response);

      })
    }
    Update(producto: Product){
      this.db.collection('productos').doc(producto.id).update(producto).then(Response => {
        console.log(Response);
      });
    }
}
