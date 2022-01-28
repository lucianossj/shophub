import { Component, Input, OnInit } from '@angular/core';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Input()
  public title: string = '';

  constructor(
    private routeService: RouteService
  ) { }

  public ngOnInit(): void {
  }

  get activeRoute(): string {
    return this.routeService.activeRoute;
  }

}
