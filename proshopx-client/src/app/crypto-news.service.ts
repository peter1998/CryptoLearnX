import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CryptoNewsService {
  private url = 'https://crypto-news16.p.rapidapi.com/news/all';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'e7660d5bf4msh0a887a98312f862p1fd89djsn4da262cde5c0',
    'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com',
  });

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get(this.url, { headers: this.headers });
  }
}
