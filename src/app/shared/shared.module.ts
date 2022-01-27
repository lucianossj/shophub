import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RoundedButtonComponent } from './rounded-button/rounded-button.component';



@NgModule({
  declarations: [
    NavbarComponent,
    TopbarComponent,
    RoundedButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    TopbarComponent,
    RoundedButtonComponent
  ]
})
export class SharedModule { }
