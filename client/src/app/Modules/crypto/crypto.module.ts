import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CryptoRoutingModule } from './crypto-routing.module';
import { CryptoCurrencyDetailComponent } from './Components/crypto-currency-detail/crypto-currency-detail.component';
import { CartPageComponent } from 'src/app/cart-page/cart-page.component';
import { CryptoCurrencyListComponent } from './Components/crypto-currency-list/crypto-currency-list.component';
import { CryptoCurrencyLandingComponent } from './Components/crypto-currency-landing/crypto-currency-landing.component';
import { CryptoNewsComponent } from './Components/crypto-news/crypto-news.component';
import { CryptoInteractiveChartComponent } from './Components/crypto-interactive-chart/crypto-interactive-chart.component';
import { CryptoCalculatorComponent } from './Components/crypto-calculator/crypto-calculator.component';
import { LivePriceTickerComponent } from './Components/live-price-ticker/live-price-ticker.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CryptoCurrencyDetailComponent,
    CartPageComponent,
    CryptoCurrencyListComponent,
    CryptoCurrencyLandingComponent,
    CryptoNewsComponent,
    CryptoInteractiveChartComponent,
    CryptoCalculatorComponent,
    LivePriceTickerComponent,
  ],
  imports: [
    CommonModule,
    CryptoRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NgChartsModule,
    FormsModule,
  ],
})
export class CryptoModule {}
