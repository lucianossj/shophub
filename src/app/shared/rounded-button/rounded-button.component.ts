import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rounded-button',
  templateUrl: './rounded-button.component.html',
  styleUrls: ['./rounded-button.component.css']
})
export class RoundedButtonComponent implements OnInit {

  @Input()
  public faIcon: string = '';

  @Input()
  public size: number = 0;
  
  @Input()
  public totalQty: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
