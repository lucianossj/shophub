import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageKeysEnum } from 'src/app/shared/enum/local-storage-keys.enum';
import { ProductModel } from 'src/app/shared/model/product.model';
import { RouteService } from 'src/app/shared/service/route.service';

@Injectable()
export class ShopService {

  constructor(
    private routeService: RouteService
  ) { }

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
