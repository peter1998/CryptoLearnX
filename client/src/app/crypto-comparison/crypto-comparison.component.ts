import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import {
  CryptoCurrency,
  CryptoCurrencyService,
} from '../crypto-currency.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-crypto-comparison',
  templateUrl: './crypto-comparison.component.html',
  styleUrls: ['./crypto-comparison.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CryptoComparisonComponent implements OnInit {
  searchControl = new FormControl();
  filteredOptions: Observable<CryptoCurrency[]> = of([]);
  selectedCryptocurrencies: CryptoCurrency[] = [];

  @Output() remove = new EventEmitter<CryptoCurrency>();

  constructor(private cryptoService: CryptoCurrencyService) {}

  ngOnInit() {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      switchMap((value) => this._filter(value))
    );

    // Fetch the cryptocurrencies when the component is initialized
    this.cryptoService
      .getCryptocurrencies()
      .subscribe((cryptos: CryptoCurrency[]) => {
        this.selectedCryptocurrencies = cryptos;
      });
  }

  removeCrypto(crypto: CryptoCurrency) {
    this.selectedCryptocurrencies = this.selectedCryptocurrencies.filter(
      (c) => c !== crypto
    );
  }

  addCrypto(crypto: CryptoCurrency) {
    if (!this.selectedCryptocurrencies.some((c) => c.id === crypto.id)) {
      this.selectedCryptocurrencies = [
        ...this.selectedCryptocurrencies,
        crypto,
      ];
    }
  }
  fetchAllCryptos() {
    this.cryptoService
      .getCryptocurrencies()
      .subscribe((cryptos: CryptoCurrency[]) => {
        this.selectedCryptocurrencies = cryptos;
      });
  }

  private _filter(value: string): Observable<CryptoCurrency[]> {
    if (value) {
      // If the user has entered a value, fetch the cryptocurrencies from the API
      return this.cryptoService
        .getCryptocurrencies()
        .pipe(
          map((cryptos: CryptoCurrency[]) =>
            cryptos.filter((crypto) =>
              crypto.name.toLowerCase().includes(value.toLowerCase())
            )
          )
        );
    } else {
      // If the user hasn't entered a value, return an empty array
      return of([]);
    }
  }
}
