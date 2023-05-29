import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoCurrencyDetailComponent } from './crypto-currency-detail/crypto-currency-detail.component';

const routes: Routes = [
  { path: 'cryptoCurrency/:id', component: CryptoCurrencyDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
