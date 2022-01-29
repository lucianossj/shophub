import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ListProductsComponent } from './shop/list-products/list-products.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ListProductsComponent },
  { path: 'product-details/:code', component: ProductDetailsComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
