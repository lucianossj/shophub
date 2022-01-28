import { Injectable } from '@angular/core';
import { LocalStorageKeysEnum } from 'src/app/shared/enum/local-storage-keys.enum';

@Injectable()
export class ShopService {

  constructor() { }

  get products() {
    const json: string | null = localStorage.getItem(LocalStorageKeysEnum.PRODUCTS);
    return JSON.parse(json!.toString());
  }

}
