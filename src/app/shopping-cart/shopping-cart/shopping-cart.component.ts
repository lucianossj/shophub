import { Component, OnInit } from '@angular/core';
import { CartProductModel } from 'src/app/shared/model/cart-product.model';
import { CartModel } from 'src/app/shared/model/cart.model';
import { ColorModel } from 'src/app/shared/model/color.model';
import { SizeModel } from 'src/app/shared/model/size.model';
import { AlertService } from 'src/app/shared/service/alert.service';
import { ShoppingCartService } from '../service/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public cart: CartModel;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private alertService: AlertService
  ) { }

  public ngOnInit(): void {
    this.getCart();
  }

  public checkout(): void {
    this.shoppingCartService.checkout();
    this.alertService.success('Thank you for your order.');
  }

  public getCart(): void {
    this.cart = this.shoppingCartService.cart;
  }

  public removeProduct(product: CartProductModel): void {
    product.quantity = 0;
    this.cart.products = this.cart.products.filter(prod => prod.quantity > 0);
    this.calculateTotalPrice(product);
    this.updateLocalStorage(product);
  }

  public getColor(product: CartProductModel): ColorModel {
    return product.colors?.find(color => color.selected);
  }

  public getSize(product: CartProductModel): SizeModel {
    return product.sizes?.find(size => size.selected);
  }

  public minusButtonDeleteProduct(product: CartProductModel): boolean {
    return product.quantity == 1;
  }

  public minusButtonIsEnable(quantity: number): boolean {
    return quantity > 0;
  }

  public decrementQty(product: CartProductModel): void {
    product.quantity = product.quantity - 1;

    this.calculateTotalPrice(product);
    this.updateLocalStorage(product);

    if (product.quantity == 0) {
      this.cart.products = this.cart.products.filter(prod => prod.quantity > 0);
    }
  }

  public incrementQty(product: CartProductModel): void {
    product.quantity = product.quantity + 1;
    this.calculateTotalPrice(product);
    this.updateLocalStorage(product);
  }

  public verifyQuantity(product: CartProductModel): void {
    if (product.quantity < 0) {
      product.quantity = 0;
    }

    this.updateLocalStorage(product);
  }

  private calculateTotalPrice(product: CartProductModel): void {
    product.totalPrice = product.quantity * product.price;
  }

  private updateLocalStorage(product: CartProductModel): void {
    this.shoppingCartService.updateLocalStorage(product);
    this.getCart();
  }


}
