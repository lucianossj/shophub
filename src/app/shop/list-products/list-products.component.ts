import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/shared/model/product.model';
import { ShopService } from '../service/shop.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  public products: ProductModel[] = [];

  constructor(
    private shopService: ShopService
  ) { }

  public ngOnInit(): void {
    this.products = this.shopService.products;
  }

  public seeProductDetails(code: number): void {
    this.shopService.redirectToProductDetails(code);
  }

}
