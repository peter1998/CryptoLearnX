import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoCurrency, CRYPTOCURRENCIES } from '../mock-crypto-currencies';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-crypto-currency-detail',
  templateUrl: './crypto-currency-detail.component.html',
  styleUrls: ['./crypto-currency-detail.component.css'],
})
export class CryptoCurrencyDetailComponent implements OnInit {
  cryptoCurrency: CryptoCurrency | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private watchlistService: WatchlistService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cryptoCurrency = CRYPTOCURRENCIES.find(
      (cryptoCurrency) => cryptoCurrency.id === id
    );
  }

  addToWatchlist(cryptoCurrency: CryptoCurrency) {
    this.watchlistService.addToWatchlist(cryptoCurrency);
    this.router.navigate(['/watchlist']);
  }
}
