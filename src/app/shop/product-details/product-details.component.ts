import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ColorModel } from 'src/app/shared/model/color.model';
import { ImageModel } from 'src/app/shared/model/image.model';
import { ProductModel } from 'src/app/shared/model/product.model';
import { SizeModel } from 'src/app/shared/model/size.model';
import { AlertService } from 'src/app/shared/service/alert.service';
import { ShopService } from '../service/shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  public product: ProductModel;
  public quantity: number = 0;
  public qtyForm: FormGroup;
  private subscription: Subscription = new Subscription();

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alert: AlertService
  ) { }

  public ngOnInit(): void {
    this.getProductDetails();
    this.createQtyFormGroup();
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
    this.quantity = this.qtyForm.getRawValue().qty;
    this.shopService.addProductToShoppingCart(this.product, this.quantity);
    this.alert.success('Product added with success to your Shopping Cart.');
  }

  public validateQuantity(): void {
    const inputedQty: number = this.qtyForm.get('qty')?.value;

    if (inputedQty < 0) {
      this.qtyForm.get('qty')?.setValue(0);
    } else {
      this.qtyForm.get('qty')?.setValue(inputedQty);
    }
  }

  public incrementQty(): void {
    const inputedQty: number = this.qtyForm.get('qty')?.value;
    const quantity: number = inputedQty + 1;
    this.qtyForm.get('qty')?.setValue(quantity);
    this.validateQuantity();
  }

  public decrementQty(): void {
    const inputedQty: number = this.qtyForm.get('qty')?.value;
    const quantity: number = inputedQty - 1;
    this.qtyForm.get('qty')?.setValue(quantity);
    this.validateQuantity();
  }

  private getProductDetails(): void {
    this.subscription.add(this.paramsSubscription);
  }

  private createQtyFormGroup(): void {
    this.qtyForm = this.formBuilder.group({
      qty: [ this.quantity, Validators.required ]
    });
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

  get propertiesIsSelected(): boolean {
    return this.product.sizes.some(size => size.selected) && this.product.colors.some(color => color.selected);
  }

  get minusButtonIsEnable(): boolean {
    return this.propertiesIsSelected && this.qtyForm.get('qty').value > 0;
  }

  get plusButtonIsEnable(): boolean {
    return this.propertiesIsSelected;
  }

  get addButtonIsEnable(): boolean {
    return this.propertiesIsSelected && this.qtyForm.get('qty')?.value > 0;
  }

}
