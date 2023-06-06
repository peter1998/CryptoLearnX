import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CryptoCurrencyDetailComponent } from './crypto-currency-detail/crypto-currency-detail.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InternetOfThingsComponent } from './internet-of-things/internet-of-things.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { CryptoCurrencyListComponent } from './crypto-currency-list/crypto-currency-list.component';
import { CryptoCurrencyLandingComponent } from './crypto-currency-landing/crypto-currency-landing.component';
import { CryptoNewsComponent } from './crypto-news/crypto-news.component';
import { LivePriceTickerComponent } from './live-price-ticker/live-price-ticker.component';
import { DiscussionForumComponent } from './discussion-forum/discussion-forum.component';
import { NgChartsModule } from 'ng2-charts';
import { CryptoInteractiveChartComponent } from './crypto-interactive-chart/crypto-interactive-chart.component';
import { FormsModule } from '@angular/forms';
import { CryptoCalculatorComponent } from './crypto-calculator/crypto-calculator.component';
import { CryptoAlertsComponent } from './crypto-alerts/crypto-alerts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'crypto/:id', component: CryptoCurrencyDetailComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'profile', component: UserProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CryptoCurrencyDetailComponent,
    CartPageComponent,
    UserProfileComponent,
    InternetOfThingsComponent,
    CyberSecurityComponent,
    CryptoCurrencyListComponent,
    CryptoCurrencyLandingComponent,
    CryptoNewsComponent,
    LivePriceTickerComponent,
    DiscussionForumComponent,
    CryptoInteractiveChartComponent,
    CryptoCalculatorComponent,
    CryptoAlertsComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NgChartsModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
