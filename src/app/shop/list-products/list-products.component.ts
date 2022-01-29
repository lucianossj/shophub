import { Component, OnInit } from '@angular/core';
import { SortProductEnum } from 'src/app/shared/enum/sort-product.enum';
import { ProductModel } from 'src/app/shared/model/product.model';
import { ShopService } from '../service/shop.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  public products: ProductModel[] = [];
  public sortBy: SortProductEnum;

  constructor(
    private shopService: ShopService
  ) { }

  public ngOnInit(): void {
    this.products = this.shopService.products;
    this.sortProducts(SortProductEnum.RATING);
  }

  public seeProductDetails(code: number): void {
    this.shopService.redirectToProductDetails(code);
  }

  public sortProducts(sortBy: SortProductEnum): void {
    this.sortBy = sortBy;
  }

  get productsSorted(): ProductModel[] {
    return this.products.sort((a, b) => this.sort(a, b));
  }

  public sort(a: ProductModel, b: ProductModel): number {
    switch (this.sortBy) {
      case (SortProductEnum.RATING): return this.sortByRating(a, b)
      case (SortProductEnum.PRICE_ASC): return this.sortByPrice(a, b)
      case (SortProductEnum.PRICE_DESC): return this.sortByPrice(b, a)
    }
  }

  public sortByRating(a: ProductModel, b: ProductModel): number {
    if (a.rating > b.rating) {
      return 1;
    }
    if (a.rating < b.rating) {
      return -1;
    }
    return 0;
  }

  public sortByPrice(a: ProductModel, b: ProductModel): number {
    if (a.price > b.price) {
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    }
    return 0;
  }

}
