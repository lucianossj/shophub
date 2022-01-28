import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageKeysEnum } from 'src/app/shared/enum/local-storage-keys.enum';
import { CartModel } from 'src/app/shared/model/cart.model';
import { ProductModel } from 'src/app/shared/model/product.model';
import { RouteService } from 'src/app/shared/service/route.service';
import { ShopMapper } from '../mapper/shop.mapper';

@Injectable()
export class ShopService {

  constructor(
    private routeService: RouteService
  ) { }

  public addProductToShoppingCart(product: ProductModel, quantity: number): void {
    const cartJson = localStorage.getItem(LocalStorageKeysEnum.SHOPPING_CART);
    const cart: CartModel = JSON.parse(cartJson.toString());
    const productToAdd = ShopMapper.mapProductToCartProductModel(product, quantity);

    cart.products.push(productToAdd);
    cart.totalPrice = cart.totalPrice + productToAdd.totalPrice;

    localStorage.setItem(LocalStorageKeysEnum.SHOPPING_CART, JSON.stringify(cart));
    this.routeService.redirectToShop();
  }

  public redirectToProductDetails(code: number): void {
    this.routeService.redirectToProductDetails(code);
  }

  get params(): Observable<any> {
    return this.routeService.params;
  }

  get products(): ProductModel[] {
    const json: string = localStorage.getItem(LocalStorageKeysEnum.PRODUCTS);
    return JSON.parse(json.toString());
  }

}
