import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  CryptoCurrency,
  CryptoCurrencyService,
} from 'src/app/Services/crypto-currency.service';

@Component({
  selector: 'app-crypto-calculator',
  templateUrl: './crypto-calculator.component.html',
  styleUrls: ['./crypto-calculator.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CryptoCalculatorComponent implements OnInit {
  cryptos: CryptoCurrency[] = [];
  crypto1Index: number = 0;
  crypto2Index: number = 1;
  amount = 1;
  result: number = 0;

  constructor(private cryptoCurrencyService: CryptoCurrencyService) {}

  ngOnInit(): void {
    //this.cryptoCurrencyService.getCryptocurrencies().subscribe((cryptos) => {
    //  this.cryptos = cryptos;
    //});
  }

  calculate(): void {
    const crypto1 = this.cryptos[this.crypto1Index];
    const crypto2 = this.cryptos[this.crypto2Index];
    if (crypto1 && crypto2) {
      const crypto1Price = Number(crypto1.current_price);
      const crypto2Price = Number(crypto2.current_price);
      if (!isNaN(crypto1Price) && !isNaN(crypto2Price)) {
        this.result = (this.amount * crypto1Price) / crypto2Price;
      }
    }
  }
}
