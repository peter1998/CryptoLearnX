import { Component, OnInit } from '@angular/core';
import { CryptoCurrency } from '../Services/crypto-currency.service';
import { WatchlistService } from '../Services/watchlist.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  items: CryptoCurrency[] = [];

  constructor(private cartService: WatchlistService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
}
