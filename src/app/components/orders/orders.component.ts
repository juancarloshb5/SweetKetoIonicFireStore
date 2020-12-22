import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  edit = false;
  productos: any[] = [];

  producto?: Product;
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.GetProducts();
  }

  EditMode(producto: Product){
    this.edit = !this.edit;
    this.producto = producto;
    console.log(producto);
  }

  GetProducts() {
  this.db.collection('productos').valueChanges({idField: 'id'}).subscribe(Response => {
    console.log(Response);
    this.productos = Response;
  })
  }
  AddProduct(){
    this.db.collection('productos').add(this.producto).then( Response => {
      console.log(Response);

    })
  }
  Remove(producto: Product){
    this.db.collection('productos').doc(producto.id).delete().then(Response => {
      console.log(Response);

    })
  }
  Update(producto: Product){
    this.db.collection('productos').doc(producto.id).update(producto).then(Response => {
      console.log(Response);
      this.edit = false;
      this.producto = undefined;

    })
  }
}
export class Product {
  id?: string;
  imgUrl?: string;
  descripcion?: string;
}


