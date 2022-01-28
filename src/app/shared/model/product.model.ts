import { ColorModel } from "./color.model";

export class ProductModel {
    constructor(
        public category: string,
        public code: number,
        public colors: ColorModel[],
        public description: string,
        public images: string[],
        public name: string,
        public price: number,
        public sizes: string[],
    ) {}
}