import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Reference } from '@angular/fire/storage/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent implements OnInit {

  images: Reference[] = [];
  imgs: string[] = [];
  constructor(private storage: AngularFireStorage, private modal: ModalController) { }

  ngOnInit(): void {
    this.GetImages();
  }

  GetImages(){
    this.storage.storage.ref('product-images').listAll().then(Response => {
      console.log(Response);
      Response.items.forEach(img => {
        console.log(img);
        this.DisplayImage(img);

      })
      // this.images =  Response.items;
      // console.log(Response.items);


    })
  }

  DisplayImage(img: Reference){
    img.getDownloadURL().then( url => {
      console.log(url);
      console.log('url');
      this.imgs.push(url);

      return url;
    })
  }

  SelectImage(url: string){
    this.modal.dismiss(url);

  }


}
