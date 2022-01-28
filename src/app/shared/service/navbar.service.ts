import { Injectable } from '@angular/core';
import { LocalStorageKeysEnum } from '../enum/local-storage-keys.enum';
import { CartModel } from '../model/cart.model';

@Injectable()
export class NavbarService {

  constructor() { }

  get cart(): CartModel {
    const cartJson = localStorage.getItem(LocalStorageKeysEnum.SHOPPING_CART);
    return JSON.parse(cartJson);
  }

  get totalPrice(): number {
    return this.cart.totalPrice;
  }

  get totalProducts(): number {
    return this.cart.products.length ?
      this.cart.products
        .map(product => product?.quantity)
        .reduce((prev, cur) => prev + cur) : 0;
  }

}
