import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoCurrencyDetailComponent } from './Components/crypto-currency-detail/crypto-currency-detail.component';
import { CryptoCalculatorComponent } from './Components/crypto-calculator/crypto-calculator.component';
import { CryptoCurrencyLandingComponent } from './Components/crypto-currency-landing/crypto-currency-landing.component';
import { CryptoCurrencyListComponent } from './Components/crypto-currency-list/crypto-currency-list.component';
import { CryptoNewsComponent } from './Components/crypto-news/crypto-news.component';

const routes: Routes = [
  { path: '', component: CryptoCurrencyLandingComponent },
  { path: 'list', component: CryptoCurrencyListComponent },
  { path: 'news', component: CryptoNewsComponent },
  { path: 'calculator', component: CryptoCalculatorComponent },

  { path: ':id', component: CryptoCurrencyDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoRoutingModule {}
