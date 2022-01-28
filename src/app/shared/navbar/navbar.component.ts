import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar.service';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private routeService: RouteService,
    private navbarService: NavbarService
  ) { }

  public ngOnInit(): void {
  }

  public redirectToHome(): void {
    this.routeService.redirectToHome();
  }

  public redirectToShop(): void {
    this.routeService.redirectToShop();
  }

  public redirectToBlog(): void {
    this.routeService.redirectToBlog();
  }

  public redirectToContact(): void {
    this.routeService.redirectToContact();
  }

  public verifyIsActive(route: string): boolean {
    return this.routeService.activeRoute === route;
  }

  get totalPrice(): number {
    return this.navbarService.totalPrice;
  }

  get totalQty(): number {
    return this.navbarService.totalProducts;
  }

}
