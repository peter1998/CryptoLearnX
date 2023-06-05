// crypto-news.component.ts

import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CryptoNewsService } from 'src/app/Services/crypto-news.service';

@Component({
  selector: 'app-crypto-news',
  templateUrl: './crypto-news.component.html',
  styleUrls: ['./crypto-news.component.css'],
})
export class CryptoNewsComponent implements OnInit {
  news: any[] = [];
  loading = false;

  constructor(
    private cryptoNewsService: CryptoNewsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.loading = true;
    this.cryptoNewsService.getNews('BTC').subscribe({
      next: (data) => {
        this.news.push(...this.sanitizeNews(data.results));
      },
      error: (error) => {
        console.error('Error fetching news', error);
      },
    });
    this.cryptoNewsService.getNews('ETH').subscribe({
      next: (data) => {
        this.news.push(...this.sanitizeNews(data.results));
      },
      error: (error) => {
        console.error('Error fetching news', error);
      },
    });
    this.cryptoNewsService.getNews('BNB').subscribe({
      next: (data) => {
        this.news.push(...this.sanitizeNews(data.results));
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching news', error);
        this.loading = false;
      },
    });
  }

  openUrl(url: string): void {
    window.open(url, '_blank');
  }

  getSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  sanitizeNews(news: any[]): any[] {
    return news.map((article) => ({
      ...article,
      safeUrl: this.sanitizer.bypassSecurityTrustUrl(article.url),
      url: article.url,
    }));
  }
}
