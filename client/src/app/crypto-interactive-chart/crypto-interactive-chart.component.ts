import { Component, OnInit } from '@angular/core';
import {
  CryptoCurrencyService,
  CryptoCurrency,
} from '../crypto-currency.service';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-crypto-interactive-chart',
  templateUrl: './crypto-interactive-chart.component.html',
  styleUrls: ['./crypto-interactive-chart.component.css'],
})
export class CryptoInteractiveChartComponent implements OnInit {
  chartData: ChartDataset[] = [];
  chartLabels: string[] = [];
  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Price (USD)',
        },
      },
    },
  };
  chartPlugins = [];
  chartLegend = true;
  chartType: ChartType = 'line';

  cryptocurrencies: CryptoCurrency[] = [];
  selectedCrypto?: CryptoCurrency;

  constructor(private cryptoService: CryptoCurrencyService) {}

  ngOnInit(): void {
    this.cryptoService.getCryptocurrencies().subscribe((cryptos) => {
      this.cryptocurrencies = cryptos;
      this.selectedCrypto = this.cryptocurrencies[0]; // Select the first cryptocurrency by default
      this.updateChart(this.selectedCrypto.id);
    });
  }

  updateChart(cryptoId: string): void {
    // Fetch the data for the selected cryptocurrency
    this.cryptoService
      .getCryptoCurrencyHistoricalData(cryptoId)
      .subscribe((data) => {
        // Extract necessary data for the chart
        const prices = data.prices;
        this.chartData = [
          {
            data: prices.map((price: any) => price[1]),
            label: 'Price',
          },
        ];
        this.chartLabels = prices.map((price: any) =>
          new Date(price[0]).toLocaleDateString()
        );
      });
  }

  onCryptoChange(event: Event): void {
    const target = event.target as HTMLSelectElement | null;
    if (target) {
      const selectedCrypto = this.cryptocurrencies.find(
        (crypto) => crypto.id === target.value
      );
      if (selectedCrypto) {
        this.selectedCrypto = selectedCrypto;
        this.updateChart(this.selectedCrypto.id);
      } else {
        // Handle the case when selectedCrypto is undefined
        // For example, you can clear the chart or show an error message
      }
    }
  }
}
