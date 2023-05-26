import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart = [PRODUCTS[0]];

  constructor() {}

  ngOnInit() {}
}
