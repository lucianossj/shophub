import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageKeysEnum } from '../enum/local-storage-keys.enum';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { ProductModel } from '../model/product.model';

@Injectable()
export class LoadDataService {

  constructor(
    private http: HttpClient
  ) { }

  private loadProductData(products: ProductModel[]): void {
    localStorage.setItem(LocalStorageKeysEnum.PRODUCTS, JSON.stringify(products));
  }

  public getProducts(): Observable<void> {
    return this.http.get<ProductModel[]>('../../../assets/mocks/products.json')
      .pipe(
        tap(products => this.loadProductData(products)),
        map(() => {})
      );
  }

}
