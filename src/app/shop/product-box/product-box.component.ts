import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {

  @Input()
  public product: ProductModel;

  constructor() {
  }

  public ngOnInit(): void {
  }

  get productImage(): string {
    return this.product?.images[0].src;
  }

}
