import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CryptoCurrencyService } from '../crypto-currency.service';

@Component({
  selector: 'app-crypto-alerts',
  templateUrl: './crypto-alerts.component.html',
  styleUrls: ['./crypto-alerts.component.css'],
})
export class CryptoAlertsComponent implements OnInit {
  alertForm: FormGroup;
  alerts: { crypto: string; price: number }[] = [];

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
    this.alertForm = this.formBuilder.group({
      crypto: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.alertForm.valid) {
      this.alerts.push(this.alertForm.value);
      this.checkPrice(this.alertForm.value);
      this.alertForm.reset();
    }
  }

  checkPrice(alert: { crypto: string; price: number }) {
    this.cryptoService
      .getCryptoCurrency(alert.crypto)
      .subscribe((data: any) => {
        if (data.market_data.current_price.usd >= alert.price) {
          // TODO: Notify the user
          console.log(
            `Price alert for ${alert.crypto}: current price is ${data.market_data.current_price.usd}`
          );
        }
      });
  }
}
