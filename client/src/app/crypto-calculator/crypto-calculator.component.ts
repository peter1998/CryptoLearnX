import { Component, OnInit } from '@angular/core';
import {
  CryptoCurrencyService,
  CryptoCurrency,
} from '../crypto-currency.service';

@Component({
  selector: 'app-crypto-calculator',
  templateUrl: './crypto-calculator.component.html',
  styleUrls: ['./crypto-calculator.component.css'],
})
export class CryptoCalculatorComponent implements OnInit {
  cryptos: CryptoCurrency[] = [];
  crypto1: CryptoCurrency | null = null;
  crypto2: CryptoCurrency | null = null;
  amount = 1;
  result: number = 0;

  constructor(private cryptoCurrencyService: CryptoCurrencyService) {}

  ngOnInit(): void {
    this.cryptoCurrencyService.getCryptocurrencies().subscribe((cryptos) => {
      this.cryptos = cryptos;
      this.crypto1 = this.cryptos[0];
      this.crypto2 = this.cryptos[1];
    });
  }

  calculate(): void {
    if (this.crypto1 && this.crypto2) {
      this.result =
        (this.amount * this.crypto1.current_price) / this.crypto2.current_price;
    }
  }
}
