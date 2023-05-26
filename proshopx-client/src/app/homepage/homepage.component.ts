import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product, PRODUCTS } from '../mock-products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  products: Product[] = PRODUCTS;

  constructor(private router: Router, private cartService: CartService) {}

  viewProduct(product: Product) {
    this.cartService.addToCart(product);
    this.router.navigate(['/product', product.id]);
  }
}
