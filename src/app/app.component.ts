import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadDataService } from './shared/service/load-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ilegra-shophub';

  private subscription: Subscription = new Subscription();

  constructor(
    private loadDataService: LoadDataService
  ) {}

  public ngOnInit(): void {
    this.getProductsData();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getProductsData(): void {
    this.subscription.add(this.productsDataSubscription);
  }

  get productsDataSubscription(): Subscription {
    return this.loadDataService.getProducts()
      .subscribe(
        () => console.log('Success to load products data'),
        err => console.error('Success to load products data', err)
      );
  }

}
