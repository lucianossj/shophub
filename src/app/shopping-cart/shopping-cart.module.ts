import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './service/shopping-cart.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from '../app.module';



@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ShoppingCartService
  ]
})
export class ShoppingCartModule { }
