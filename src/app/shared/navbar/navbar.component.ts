import { Component, OnInit } from '@angular/core';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private routeService: RouteService
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

}
