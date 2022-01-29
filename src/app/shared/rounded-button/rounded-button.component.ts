import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output()
  public wasPressed: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  public ngOnInit(): void {
  }

  public buttonPressed(): void {
    this.wasPressed.emit();
  }

}
