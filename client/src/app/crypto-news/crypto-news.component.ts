// crypto-news.component.ts

import { Component, OnInit } from '@angular/core';
import { CryptoNewsService } from '../crypto-news.service';

@Component({
  selector: 'app-crypto-news',
  templateUrl: './crypto-news.component.html',
  styleUrls: ['./crypto-news.component.css'],
})
export class CryptoNewsComponent implements OnInit {
  news: any[] = [];
  loading = false;

  constructor(private cryptoNewsService: CryptoNewsService) {}

  ngOnInit() {
    this.loading = true;
    this.cryptoNewsService.getNews('BTC').subscribe({
      next: (data) => {
        this.news.push(...data.results);
      },
      error: (error) => {
        console.error('Error fetching news', error);
      },
    });
    this.cryptoNewsService.getNews('ETH').subscribe({
      next: (data) => {
        this.news.push(...data.results);
      },
      error: (error) => {
        console.error('Error fetching news', error);
      },
    });
    this.cryptoNewsService.getNews('BNB').subscribe({
      next: (data) => {
        this.news.push(...data.results);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching news', error);
        this.loading = false;
      },
    });
  }
}
