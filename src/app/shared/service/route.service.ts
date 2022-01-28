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
}
