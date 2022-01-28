import { ColorModel } from "./color.model";
import { ImageModel } from "./image.model";
import { SizeModel } from "./size.model";

export class ProductModel {
    constructor(
        public category: string,
        public code: number,
        public colors: ColorModel[],
        public description: string,
        public images: ImageModel[],
        public name: string,
        public price: number,
        public sizes: SizeModel[],
    ) {}
}