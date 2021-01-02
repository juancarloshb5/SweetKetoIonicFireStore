import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {  AngularFireStorage} from '@angular/fire/storage';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { Guid } from 'guid-typescript';
import { Product } from 'src/app/models/Product.models';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  edit = false;
  productos: any[] = [];

  producto: Product | null = null;
  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

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
      this.producto = null;

    });
  }

  SelectFile(event: any){
    console.log(event.target.files);
    const image = event.target.files[0];
    const path = `product-images/${image.name + Guid.create()}`;
    this.storage.upload(path,image).then(Response => {
      console.log(Response);


    });

  }


}



