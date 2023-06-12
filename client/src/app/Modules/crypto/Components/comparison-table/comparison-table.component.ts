import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CryptoCurrency } from 'src/app/Services/crypto-currency.service';

@Component({
  selector: 'app-comparison-table',
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.css'],
})
export class ComparisonTableComponent implements OnInit {
  @Input()
  set cryptocurrencies(cryptos: CryptoCurrency[]) {
    this._cryptocurrencies = cryptos;
    this.dataSource = new MatTableDataSource(this._cryptocurrencies);
    this.dataSource.sort = this.sort;
  }
  get cryptocurrencies(): CryptoCurrency[] {
    return this._cryptocurrencies;
  }
  private _cryptocurrencies: CryptoCurrency[] = [];

  @Output() removeCrypto = new EventEmitter<CryptoCurrency>();

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
    'remove',
  ];

  dataSource: MatTableDataSource<CryptoCurrency> = new MatTableDataSource(
    this._cryptocurrencies
  );
  @ViewChild(MatSort, { static: true }) sort: MatSort = new MatSort();

  constructor() {}

  ngOnInit(): void {}
}
