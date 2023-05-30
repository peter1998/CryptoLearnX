import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CryptoCurrencyService {
  private baseUrl = 'https://api.coingecko.com/api/v3';

  constructor(private http: HttpClient) {}

  getCryptocurrencies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/coins/markets?vs_currency=usd`);
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
