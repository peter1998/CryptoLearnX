import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CryptoCurrencyService } from '../crypto-currency.service';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-crypto-currency-detail',
  templateUrl: './crypto-currency-detail.component.html',
  styleUrls: ['./crypto-currency-detail.component.css'],
})
export class CryptoCurrencyDetailComponent implements OnInit {
  cryptoCurrency: any;
  items: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private watchlistService: WatchlistService,
    private cryptoCurrencyService: CryptoCurrencyService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cryptoCurrencyService.getCryptoCurrency(id).subscribe(
        (data) => {
          this.cryptoCurrency = data;
        },
        (error) => {
          console.error('Error fetching cryptocurrency', error);
        }
      );
    }
    this.items = this.watchlistService.getItems();
  }

  addToWatchlist(cryptoCurrency: any) {
    this.watchlistService.addToWatchlist(cryptoCurrency);
  }
}
