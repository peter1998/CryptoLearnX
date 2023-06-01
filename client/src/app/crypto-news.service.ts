import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class CryptoNewsService {
  private url = 'https://crypto-news16.p.rapidapi.com/news/all';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': environment.RapidApiKey,
    'X-RapidAPI-Host': environment.RapidApiHost,
  });

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get(this.url, { headers: this.headers });
  }
}
