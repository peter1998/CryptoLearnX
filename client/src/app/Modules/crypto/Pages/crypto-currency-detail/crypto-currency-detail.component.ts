import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Routes } from 'src/app/Constants/Routes';
import { CryptoCurrencyService } from 'src/app/Services/crypto-currency.service';
import { WatchlistService } from 'src/app/Services/watchlist.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-crypto-currency-detail',
  templateUrl: './crypto-currency-detail.component.html',
  styleUrls: ['./crypto-currency-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CryptoCurrencyDetailComponent implements OnInit {
  cryptoCurrency: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cryptoCurrencyService: CryptoCurrencyService,
    private watchlistService: WatchlistService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.cryptoCurrencyService.getCryptoCurrency(id).subscribe({
        next: (data: any) => {
          this.cryptoCurrency = data;
          this.cryptoCurrency.desc = data.description['en'].split('\n')[0];
        },
        error: (error: any) => {
          console.error('Error fetching cryptocurrency', error);
        },
      });
    }
  }

  addToWatchlist() {
    const watchlistItem = {
      id: this.cryptoCurrency.id,
      name: this.cryptoCurrency.name,
      current_price: this.cryptoCurrency.market_data.current_price.usd,
      image: this.cryptoCurrency.image.thumb,
      market_cap: this.cryptoCurrency.market_data.market_cap.usd,
      total_volume: this.cryptoCurrency.market_data.total_volume.usd,
      price_change_percentage_24h:
        this.cryptoCurrency.market_data.price_change_percentage_24h,
      market_cap_rank: this.cryptoCurrency.market_cap_rank,
    };
    this.watchlistService.addToWatchlist(watchlistItem);
    this.router.navigate(['/watchlist']);
  }

  goBack() {
    this.router.navigateByUrl('/crypto/list');
  }
}
