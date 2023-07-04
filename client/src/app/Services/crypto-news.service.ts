// crypto-news.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CryptoNewsService {
  private url =
    'https://api.polygon.io/v2/reference/news?limit=10&order=descending&sort=published_utc&ticker=';

  constructor(private http: HttpClient) {}

  getNews(ticker: string): Observable<any> {
    return this.http.get(
      this.url + ticker + '&apiKey=' + environment.PolygonApiKey
    );
  }

  // TODO: Remove this when not needed
  getBitcoinNews(): Observable<any> {
    return this.http.get(
      'https://raw.githubusercontent.com/peter1998/CryptoLearnX/main/client/dummy_data/bitcoin_dummy_articles.json'
    );
  }

  // TODO: Remove this when not needed
  getEthereumNews(): Observable<any> {
    return this.http.get(
      'https://raw.githubusercontent.com/peter1998/CryptoLearnX/main/client/dummy_data/ethereum_dummy_articles.json'
    );
  }
}
