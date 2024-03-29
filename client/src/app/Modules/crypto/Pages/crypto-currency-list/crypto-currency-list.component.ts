import { Component, OnInit } from '@angular/core';
import {
  CryptoCurrency,
  CryptoCurrencyService,
} from 'src/app/Services/crypto-currency.service';

@Component({
  selector: 'app-crypto-currency-list',
  templateUrl: './crypto-currency-list.component.html',
  styleUrls: ['./crypto-currency-list.component.css'],
})
export class CryptoCurrencyListComponent implements OnInit {
  cryptocurrencies: CryptoCurrency[] = [];

  constructor(private cryptoCurrencyService: CryptoCurrencyService) {}

  ngOnInit() {
    this.cryptoCurrencyService.getCryptocurrencies().subscribe(
      (data) => {
        this.cryptocurrencies = data;
      },
      (error) => {
        console.error('Error fetching cryptocurrencies', error);
      }
    );
  }
}
