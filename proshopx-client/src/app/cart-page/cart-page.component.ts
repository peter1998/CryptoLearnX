import { Component, OnInit } from '@angular/core';
import { Product } from '../mock-products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  items: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
}
