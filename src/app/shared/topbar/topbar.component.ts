import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouteService } from '../service/route.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Input()
  public title: string = '';

  @Output()
  public sorted: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private routeService: RouteService
  ) { }

  public ngOnInit(): void {
  }

  get activeRoute(): string {
    return this.routeService.activeRoute;
  }

  public sortBy(tst: string): void {
    this.sorted.emit(Number(tst));
  }

}
