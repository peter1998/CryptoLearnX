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
  products: CryptoCurrency[] = CRYPTOCURRENCIES;

  constructor(private router: Router, private cartService: WatchlistService) {}

  viewProduct(product: CryptoCurrency) {
    this.cartService.addToWatchlist(product);
    this.router.navigate(['/product', product.id]);
  }
}
