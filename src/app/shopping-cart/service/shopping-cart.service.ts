import { Injectable } from '@angular/core';
import { LocalStorageKeysEnum } from 'src/app/shared/enum/local-storage-keys.enum';
import { CartProductModel } from 'src/app/shared/model/cart-product.model';
import { CartModel } from 'src/app/shared/model/cart.model';
import { RouteService } from 'src/app/shared/service/route.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(
    private routeService: RouteService
  ) { }

  get cart(): CartModel {
    const json: string = localStorage.getItem(LocalStorageKeysEnum.SHOPPING_CART);
    return JSON.parse(json.toString());
  }

  public checkout(): void {
    const cart: CartModel = new CartModel();
    cart.products = [];
    cart.totalPrice = 0;
    localStorage.setItem(LocalStorageKeysEnum.SHOPPING_CART, JSON.stringify(cart));
    this.routeService.redirectToHome();
  }

  public updateLocalStorage(product: CartProductModel): void {
    const json: string = localStorage.getItem(LocalStorageKeysEnum.SHOPPING_CART);
    let cart: CartModel = JSON.parse(json.toString());

    cart.products = cart.products.filter(prod => prod.code != product.code);
    cart.products.push(product);
    cart = this.calculateCartTotalPrice(cart);

    localStorage.setItem(LocalStorageKeysEnum.SHOPPING_CART, JSON.stringify(cart));
  }

  private calculateCartTotalPrice(cart: CartModel): CartModel {
    let totalPrice: number = 0;
    cart.products.forEach(product => totalPrice = totalPrice + product.totalPrice);
    cart.totalPrice = totalPrice;
    return cart;
  }

}
