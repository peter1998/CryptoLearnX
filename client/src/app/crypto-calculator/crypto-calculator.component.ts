import { Component, OnInit } from '@angular/core';
import {
  CryptoCurrencyService,
  CryptoCurrency,
} from '../crypto-currency.service';
import { tap } from 'rxjs/operators';

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
    this.cryptoCurrencyService
      .getCryptocurrencies()
      .pipe(
        tap((cryptos) => {
          this.cryptos = cryptos;
          this.crypto1 = this.cryptos[0];
          this.crypto2 = this.cryptos[1];
        })
      )
      .subscribe();
  }

  calculate(): void {
    console.log('calculate method triggered');
    if (this.crypto1 && this.crypto2) {
      const crypto1Price = Number(this.crypto1.current_price);
      const crypto2Price = Number(this.crypto2.current_price);
      console.log('crypto1Price:', crypto1Price);
      console.log('crypto2Price:', crypto2Price);
      if (!isNaN(crypto1Price) && !isNaN(crypto2Price)) {
        this.result = (this.amount * crypto1Price) / crypto2Price;
        console.log('result:', this.result);
      }
    }
  }
}
