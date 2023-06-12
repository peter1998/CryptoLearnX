import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CryptoRoutingModule } from './crypto-routing.module';

import { CryptoCurrencyDetailComponent } from './Pages/crypto-currency-detail/crypto-currency-detail.component';
import { CartPageComponent } from 'src/app/cart-page/cart-page.component';
import { CryptoCurrencyListComponent } from './Pages/crypto-currency-list/crypto-currency-list.component';
import { CryptoCurrencyLandingComponent } from './Pages/crypto-currency-landing/crypto-currency-landing.component';
import { CryptoNewsComponent } from './Pages/crypto-news/crypto-news.component';
import { CryptoInteractiveChartComponent } from './Components/crypto-interactive-chart/crypto-interactive-chart.component';
import { CryptoCalculatorComponent } from './Pages/crypto-calculator/crypto-calculator.component';
import { LivePriceTickerComponent } from './Components/live-price-ticker/live-price-ticker.component';
import { CryptoAlertsComponent } from './Pages/crypto-alerts/crypto-alerts.component';
import { CryptoComparisonComponent } from './Pages/crypto-comparison/crypto-comparison.component';
import { CryptoCurrencyLearningResourcesComponent } from './Pages/crypto-currency-learning-resources/crypto-currency-learning-resources.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';
import { LearningResourceService } from 'src/app/Services/crypto-learning-resource.service';
import { PriceMonitorService } from 'src/app/Services/price-monitor.service';
import { ComparisonTableComponent } from './Components/comparison-table/comparison-table.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

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
    CryptoAlertsComponent,
    CryptoComparisonComponent,
    CryptoCurrencyLearningResourcesComponent,
    ComparisonTableComponent,
  ],
  imports: [
    CommonModule,
    CryptoRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTableModule,
    MatInputModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [PriceMonitorService, LearningResourceService],
})
export class CryptoModule {}
