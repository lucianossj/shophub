import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-review-product',
  templateUrl: './review-product.component.html',
  styleUrls: ['./review-product.component.css']
})
export class ReviewProductComponent implements OnInit {

  @Input()
  public reviewRating: number = 1;

  @Output('wasRated')
  public wasRated: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  public ngOnInit(): void {
  }

  public rate(rate: number) {
    this.reviewRating = rate;
    this.wasRated.emit(this.reviewRating);
  }

  public verifyRating(rating: number): boolean {
    return this.reviewRating >= rating;
  }

}
