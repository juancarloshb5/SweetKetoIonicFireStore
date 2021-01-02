import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.models';
import { ProductService } from 'src/app/services/product.service';
import { LoginComponent } from '../../auth/login/login.component';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService ) { }

  ngOnInit(): void {
  }

  Post(product: Product){
    this.productService.AddProduct(product).then(Response => {
      console.log(Response);

    })
  }

}
