import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  products = PRODUCTS;

  constructor(private router: Router) {}

  viewProduct(id: number) {
    if (id === 1) {
      this.router.navigate(['/cart']);
    } else {
      this.router.navigate(['/product', id]);
    }
  }
}
