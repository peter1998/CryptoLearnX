import { Injectable } from '@angular/core';
import { CryptoCurrency } from './mock-crypto-currencies';

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
