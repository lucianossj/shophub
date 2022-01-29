import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class RouteService {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  get activeRoute(): string {
    return this.router.url;
  }

  get params(): Observable<any> {
    return this.activatedRoute.params;
  }

  public redirectToHome(): void {
    this.router.navigateByUrl(`/home`);
  }
  
  public redirectToShop(): void {
    this.router.navigateByUrl(`/products`);
  }
  
  public redirectToBlog(): void {
    this.router.navigateByUrl(`/blog`);
  }
  
  public redirectToContact(): void {
    this.router.navigateByUrl(`/contact`);
  }

  public redirectToCart(): void {
    this.router.navigateByUrl(`/shopping-cart`);
  }

  public redirectToProductDetails(code: number): void {
    this.router.navigateByUrl(`/product-details/${code}`);
  }

}
