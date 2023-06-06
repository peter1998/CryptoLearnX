import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CryptoCurrencyService,
  CryptoCurrency,
} from '../crypto-currency.service';

@Component({
  selector: 'app-crypto-alerts',
  templateUrl: './crypto-alerts.component.html',
  styleUrls: ['./crypto-alerts.component.css'],
})
export class CryptoAlertsComponent implements OnInit {
  alertForm: FormGroup;
  alerts: { crypto: CryptoCurrency; price: number }[] = [];
  cryptos: CryptoCurrency[] = [];
  alertMessages: { message: string }[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private cryptoService: CryptoCurrencyService
  ) {
    this.alertForm = this.formBuilder.group({
      crypto: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {
    this.cryptoService
      .getCryptocurrencies()
      .subscribe((data: CryptoCurrency[]) => {
        this.cryptos = data;
      });
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
            `Price alert for ${priceAlert.crypto}: current price is ${data.market_data.current_price.usd}`
          );
        }
      });
  }

  addAlert(message: string) {
    this.alertMessages.push({ message });
  }

  dismissAlert(index: number) {
    this.alertMessages.splice(index, 1);
  }
}
