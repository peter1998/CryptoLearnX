import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CryptoCurrencyService } from '../crypto-currency.service';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  cryptocurrencies: any[] = [];

  constructor(
    private router: Router,
    private watchList: WatchlistService,
    private cryptoCurrencyService: CryptoCurrencyService
  ) {}

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

  addToWatchlistAndNavigate(cryptoCurrency: any) {
    this.watchList.addToWatchlist(cryptoCurrency);
    this.router.navigate(['/cryptoCurrency', cryptoCurrency.id]);
  }
}
