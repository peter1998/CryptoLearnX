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
  alerts: { crypto: string; price: number }[] = [];
  cryptos: CryptoCurrency[] = [];

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
      this.alerts.push(this.alertForm.value);
      this.checkPrice(this.alertForm.value);
      this.alertForm.reset();
    }
  }

  checkPrice(priceAlert: { crypto: string; price: number }) {
    this.cryptoService
      .getCryptoCurrency(priceAlert.crypto)
      .subscribe((data: any) => {
        if (data.market_data.current_price.usd >= priceAlert.price) {
          window.alert(
            `Price alert for ${priceAlert.crypto}: current price is ${data.market_data.current_price.usd}`
          );
        }
      });
  }
}
