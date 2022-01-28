import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/shared/service/route.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private routeService: RouteService
  ) { }

  public ngOnInit(): void {
    this.routeService.redirectToHome();
  }

}
