
import { Builder } from 'builder-pattern';

import { CartProductModel } from "src/app/shared/model/cart-product.model";
import { ProductModel } from 'src/app/shared/model/product.model';

export class ShopMapper {

    public static mapProductToCartProductModel(product: ProductModel, quantity: number): CartProductModel {
        return Builder<CartProductModel>()
            .category(product.category)
            .code(product.code)
            .colors(product.colors)
            .description(product.description)
            .images(product.images)
            .name(product.name)
            .price(product.price)
            .reviewNote(product.reviewNote)
            .sizes(product.sizes)
            .quantity(quantity)
            .totalPrice(quantity * product.price)
        .build();
    }

}