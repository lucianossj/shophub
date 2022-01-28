import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ColorModel } from 'src/app/shared/model/color.model';
import { ImageModel } from 'src/app/shared/model/image.model';
import { ProductModel } from 'src/app/shared/model/product.model';
import { SizeModel } from 'src/app/shared/model/size.model';
import { ShopService } from '../service/shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  public product: ProductModel;
  private subscription: Subscription = new Subscription();

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.getProductDetails();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public selectColor(selectedColor: ColorModel, colors: ColorModel[]): void {
    selectedColor.selected = !selectedColor.selected;
    
    colors
      .filter(color => color.name != selectedColor.name)
      .forEach(color => color.selected = false);
  }

  public selectSize(selectedSize: SizeModel, sizes: SizeModel[]): void {
    selectedSize.selected = !selectedSize.selected;
    
    sizes
      .filter(size => size.size != selectedSize.size)
      .forEach(size => size.selected = false);
  }

  public selectImage(selectedImage: ImageModel, images: ImageModel[]): void {
    selectedImage.selected = true;
    
    images
      .filter(image => image.src != selectedImage.src)
      .forEach(image => image.selected = false);
  }

  public addToCart(): void {
    console.log(this.product);
  }

  private getProductDetails(): void {
    this.subscription.add(this.paramsSubscription);
  }

  private findProduct(code: number): void {
    const product = this.shopService.products
      .find(product => product.code === code);

    this.product = product;
    this.product.images[0].selected = true;
  }

  get paramsSubscription(): Subscription {
    return this.activatedRoute.params
      .subscribe(
          params => this.findProduct(Number(params.code))
      );
  }

  get selectedImage(): string {
    return this.product.images.find(image => image.selected)?.src;
  }

  get addButtonIsEnable(): boolean {
    return this.product.sizes.some(size => size.selected) && this.product.colors.some(color => color.selected)
  }

}
