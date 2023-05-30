import { Component, OnInit } from '@angular/core';
import { CryptoCurrencyService } from '../crypto-currency.service';

@Component({
  selector: 'app-live-price-ticker',
  templateUrl: './live-price-ticker.component.html',
  styleUrls: ['./live-price-ticker.component.css'],
})
export class LivePriceTickerComponent implements OnInit {
  prices: any;

  constructor(private cryptoService: CryptoCurrencyService) {}

  ngOnInit(): void {
    this.cryptoService.getCryptocurrencies().subscribe((data) => {
      this.prices = data;
    });
  }
}
