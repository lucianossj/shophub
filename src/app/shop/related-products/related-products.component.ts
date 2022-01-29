import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/shared/model/product.model';
import { ShopService } from '../service/shop.service';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css']
})
export class RelatedProductsComponent implements OnInit {

  @Input()
  public category: string;

  @Input()
  public code: number;

  constructor(
    private shopService: ShopService
  ) { }

  public ngOnInit(): void {
  }

  public seeProductDetails(code: number): void {
    this.shopService.redirectToProductDetails(code);
  }

  get relatedProducts(): ProductModel[] {
    return this.shopService.products.filter(
      product => product.category == this.category && product.code != this.code
    )
  }

}
