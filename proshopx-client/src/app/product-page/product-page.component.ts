import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const productId = id ? +id : null;
    this.product = PRODUCTS.find((product) => product.id === productId);
  }
}
