// price-monitor.service.ts

import { Injectable } from '@angular/core';
import { interval, Subscription, Subject, of } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';
import { CryptoCurrencyService } from './crypto-currency.service';

@Injectable({
  providedIn: 'root',
})
export class PriceMonitorService {
  private subscription: Subscription = new Subscription();
  alertTriggered = new Subject<string>(); // Event that is emitted when an alert is triggered

  constructor(private cryptoService: CryptoCurrencyService) {}

  startMonitoring(alerts: { crypto: string; price: number }[]) {
    const intervalTime = Math.max(60000 / alerts.length, 1000); // At least 1 second between each request
    this.subscription = interval(intervalTime)
      .pipe(
        switchMap(() => of(alerts)),
        mergeMap((alerts) => this.checkPrices(alerts))
      )
      .subscribe();
  }

  stopMonitoring() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private checkPrices(alerts: { crypto: string; price: number }[]) {
    return new Promise((resolve) => {
      alerts.forEach((alert) => {
        this.cryptoService.getCryptoCurrency(alert.crypto).subscribe((data) => {
          if (data.market_data.current_price.usd >= alert.price) {
            const message = `Price alert for ${alert.crypto}: Current price is $${data.market_data.current_price.usd}`;
            this.alertTriggered.next(message); // Emit the event with the alert message
          }
        });
      });
      resolve(null);
    });
  }
}
