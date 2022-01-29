import { CartProductModel } from "./cart-product.model";
import { ClientModel } from "./client.model";

export class CartModel {
    constructor(
        public products?: CartProductModel[],
        public totalPrice?: number
    ) { }
}