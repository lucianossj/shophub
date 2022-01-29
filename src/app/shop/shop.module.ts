import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductBoxComponent } from './product-box/product-box.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { ShopService } from './service/shop.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewProductComponent } from './review-product/review-product.component';



@NgModule({
  declarations: [
    ListProductsComponent,
    ProductBoxComponent,
    ProductDetailsComponent,
    RelatedProductsComponent,
    ReviewProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    ListProductsComponent,
    ProductDetailsComponent
  ],
  providers: [
    ShopService
  ]
})
export class ShopModule { }
