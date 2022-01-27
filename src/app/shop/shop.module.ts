import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductBoxComponent } from './product-box/product-box.component';



@NgModule({
  declarations: [
    ListProductsComponent,
    ProductBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ListProductsComponent
  ]
})
export class ShopModule { }
