import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CryptoCurrency, CryptoCurrencyService } from 'src/app/Services/crypto-currency.service';
import { PriceMonitorService } from 'src/app/Services/price-monitor.service';


@Component({
  selector: 'app-crypto-alerts',
  templateUrl: './crypto-alerts.component.html',
  styleUrls: ['./crypto-alerts.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CryptoAlertsComponent implements OnInit, OnDestroy {
  alertForm: FormGroup;
  alerts: { crypto: CryptoCurrency; price: number }[] = [];
  cryptos: CryptoCurrency[] = [];
  alertMessages: { message: string }[] = [];
  alertTriggeredSubscription: Subscription = new Subscription();
  loading = false;
  error: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private cryptoService: CryptoCurrencyService,
    private priceMonitorService: PriceMonitorService
  ) {
    this.alertForm = this.formBuilder.group({
      crypto: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {
    this.loading = true;
    this.cryptoService.getCryptocurrencies().subscribe(
      (data: CryptoCurrency[]) => {
        this.cryptos = data;
        this.loading = false;
      },
      (error) => {
        this.error = 'Failed to load cryptocurrencies';
        this.loading = false;
      }
    );

    this.alertTriggeredSubscription =
      this.priceMonitorService.alertTriggered.subscribe((message: string) => {
        this.addAlert(message);
      });
  }

  ngOnDestroy() {
    if (this.alertTriggeredSubscription) {
      this.alertTriggeredSubscription.unsubscribe();
    }
  }

  onSubmit() {
    if (this.alertForm.valid) {
      const alertCrypto = this.cryptos.find(
        (crypto) => crypto.id === this.alertForm.value.crypto
      );
      if (alertCrypto) {
        this.alerts.push({
          crypto: alertCrypto,
          price: this.alertForm.value.price,
        });
        this.priceMonitorService.startMonitoring(
          this.alerts.map((alert) => ({
            crypto: alert.crypto.id,
            price: alert.price,
          }))
        );
        this.checkPrice({
          crypto: alertCrypto.id,
          price: this.alertForm.value.price,
        });
        this.alertForm.reset();
      }
    }
  }

  checkPrice(priceAlert: { crypto: string; price: number }) {
    this.cryptoService
      .getCryptoCurrency(priceAlert.crypto)
      .subscribe((data: any) => {
        if (data.market_data.current_price.usd >= priceAlert.price) {
          this.addAlert(
            `Price alert for ${priceAlert.crypto}:
            Current price is $${data.market_data.current_price.usd}.
            The price changed by ${data.market_data.price_change_percentage_24h}% in the last 24 hours.
            The highest price in the last 24 hours was $${data.market_data.high_24h.usd}.
            The lowest price in the last 24 hours was $${data.market_data.low_24h.usd}.`
          );
        }
      });
  }

  addAlert(message: string) {
    this.alertMessages.push({ message });
  }

  dismissAlert(index: number) {
    const message = this.alertMessages[index].message;
    this.alertMessages = this.alertMessages.filter(
      (alert) => alert.message !== message
    );
  }

  dismissAlertCard(index: number) {
    this.alerts.splice(index, 1);
    this.priceMonitorService.startMonitoring(
      this.alerts.map((alert) => ({
        crypto: alert.crypto.id,
        price: alert.price,
      }))
    );
    // Update the alerts in the PriceMonitorService
  }
}
