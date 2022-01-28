import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductBoxComponent } from './product-box/product-box.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RelatedProductsComponent } from './related-products/related-products.component';



@NgModule({
  declarations: [
    ListProductsComponent,
    ProductBoxComponent,
    ProductDetailsComponent,
    RelatedProductsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ListProductsComponent,
    ProductDetailsComponent
  ]
})
export class ShopModule { }
