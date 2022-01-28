import { ProductModel } from "./product.model";

export class CartProductModel extends ProductModel {
    constructor(
        public quantity: number,
        public totalPrice: number
    ) {
        super();
    }
}