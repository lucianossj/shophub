import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouteService {

  constructor(
    private router: Router
  ) { }

  get activeRoute(): string {
    return this.router.url;
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

}
