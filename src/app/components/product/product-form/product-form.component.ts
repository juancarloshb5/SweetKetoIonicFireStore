import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl, FormGroup } from '@angular/forms';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { Guid } from 'guid-typescript';
import { Product } from 'src/app/models/Product.models';
import { ProductImagesComponent } from '../../product-images/product-images.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input()product: Product = new Product();
  @Output() validSubmit = new EventEmitter<Product>();
  formProduct = new FormGroup({
    id: new FormControl(),
    imgUrl: new FormControl(),
    descripcion: new FormControl()
  })
  constructor(private storage: AngularFireStorage,
    public routerOutlet: IonRouterOutlet,
    private modal: ModalController) { }

  ngOnInit(): void {
  }

  Submit(){
    if(this.formProduct.valid){
      this.validSubmit.next(this.formProduct.value)
    }
  }
  SelectFile(event: any){
    console.log(event.target.files);
    const image = event.target.files[0];
    const path = `product-images/${image.name + Guid.create()}`;
    this.storage.upload(path,image).then(Response => {
      console.log(Response);
      const url = Response.metadata.fullPath;
      this.formProduct.controls.imgUrl.setValue(url);
    });

  }

  async getImageModal() {
    const modal = await this.modal.create({
      component: ProductImagesComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,

    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      console.log(data);
      this.formProduct.controls.imgUrl.setValue(data)

    }
  }




}
