import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CryptoCurrency, CRYPTOCURRENCIES } from '../mock-crypto-currencies';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  cryptocurrencies: CryptoCurrency[] = CRYPTOCURRENCIES;

  constructor(private router: Router, private watchList: WatchlistService) {}

  viewCryptoCurrency(cryptoCurrency: CryptoCurrency) {
    this.watchList.addToWatchlist(cryptoCurrency);
    this.router.navigate(['/cryptoCurrency', cryptoCurrency.id]);
  }
}
