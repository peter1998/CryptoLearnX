import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoCurrencyDetailComponent } from './crypto-currency-detail/crypto-currency-detail.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  { path: 'cryptoCurrency/:id', component: CryptoCurrencyDetailComponent },
  { path: 'watchlist', component: CartPageComponent }, // Add this line
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
