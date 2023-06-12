import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoCurrencyDetailComponent } from './Pages/crypto-currency-detail/crypto-currency-detail.component';
import { CryptoCalculatorComponent } from './Pages/crypto-calculator/crypto-calculator.component';
import { CryptoCurrencyLandingComponent } from './Pages/crypto-currency-landing/crypto-currency-landing.component';
import { CryptoCurrencyListComponent } from './Pages/crypto-currency-list/crypto-currency-list.component';
import { CryptoNewsComponent } from './Pages/crypto-news/crypto-news.component';
import { CryptoAlertsComponent } from './Pages/crypto-alerts/crypto-alerts.component';
import { CryptoComparisonComponent } from './Pages/crypto-comparison/crypto-comparison.component';
import { CryptoCurrencyLearningResourcesComponent } from './Pages/crypto-currency-learning-resources/crypto-currency-learning-resources.component';

const routes: Routes = [
  { path: '', component: CryptoCurrencyLandingComponent },
  { path: 'list', component: CryptoCurrencyListComponent },
  { path: 'news', component: CryptoNewsComponent },
  { path: 'calculator', component: CryptoCalculatorComponent },

  { path: 'alerts', component: CryptoAlertsComponent },
  { path: 'comparison', component: CryptoComparisonComponent },
  {
    path: 'resources',
    component: CryptoCurrencyLearningResourcesComponent,
  },

  { path: ':id', component: CryptoCurrencyDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CryptoRoutingModule {}
