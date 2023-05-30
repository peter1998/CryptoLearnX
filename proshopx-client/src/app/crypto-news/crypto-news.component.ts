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
    this.cryptoNewsService.getNews().subscribe({
      next: (data) => {
        console.log('News data:', data); // log the data object
        if (data) {
          // Flatten the news articles from all sources into one array
          this.news = Object.values(data).flat();
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching news', error);
        this.loading = false;
      },
    });
  }
}