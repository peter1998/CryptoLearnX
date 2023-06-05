import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CryptoCurrencyService {
  private baseUrl = 'https://api.coingecko.com/api/v3';
  private dummy_cryptolist_market =
    'https://raw.githubusercontent.com/peter1998/CryptoLearnX/main/client/dummy_data/cryptolist_market.json';

  constructor(private http: HttpClient) {}

  getCryptocurrencies(): Observable<any> {
    //return this.http.get(`${this.baseUrl}/coins/markets?vs_currency=usd`);

    return this.http.get(this.dummy_cryptolist_market);
  }

  getCryptoCurrencyHistoricalData(id: string): Observable<any> {
    // TODO: Add logic for dev/prod enviroment
    // const today = new Date();
    // const startDate = new Date();
    // startDate.setMonth(today.getMonth() - 1); // Fetch data for the last month

    // const start = Math.floor(startDate.getTime() / 1000);
    // const end = Math.floor(today.getTime() / 1000);

    // return this.http.get(
    //   `${this.baseUrl}/coins/${id}/market_chart/range?vs_currency=usd&from=${start}&to=${end}`
    // );

    return this.http.get(
      `https://raw.githubusercontent.com/peter1998/CryptoLearnX/main/client/dummy_data/${id}_dummy_market.json`
    );
  }

  getCryptoCurrency(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/coins/${id}`);
  }
}

export interface CryptoCurrency {
  id: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h: number;
  market_cap_rank: number;
}
