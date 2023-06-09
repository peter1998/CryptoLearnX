import { Component, Input, OnInit } from '@angular/core';
import { CryptoCurrency } from '../crypto-currency.service';

@Component({
  selector: 'app-comparison-table',
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.css'],
})
export class ComparisonTableComponent implements OnInit {
  @Input() cryptocurrencies: CryptoCurrency[] = [];

  displayedColumns: string[] = [
    'name',
    'current_price',
    'market_cap',
    'total_volume',
    'price_change_percentage_24h',
    'high_24h',
    'low_24h',
    'price_change_24h',
    'circulating_supply',
    'total_supply',
  ];

  constructor() {}

  ngOnInit(): void {}
}
