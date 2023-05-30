import { Injectable } from '@angular/core';
import { CryptoCurrency } from './crypto-currency.service';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  items: CryptoCurrency[] = [];

  addToWatchlist(cryptoCurrency: CryptoCurrency) {
    this.items.push(cryptoCurrency);
  }

  getItems() {
    return this.items;
  }

  clearWatchlist() {
    this.items = [];
    return this.items;
  }
}
