import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILandingBoard } from '../../Components/landing-board/landing-board.component';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  boards: ILandingBoard[] = [
    {
      title: 'Cryptocurrencies',
      info_one:
        'Discover a wide range of digital currencies and stay updated with real-time market prices, trends, and historical data.',
      info_two:
        "Whether you're an experienced investor or a curious beginner, our comprehensive resources will help you navigate the exciting realm of cryptocurrencies with confidence.",
      link: '/crypto',
      image: '/assets/cryptocurrencies-landing.jpeg',
      board_reversed: false,
      background_color: 'rgba(0, 232, 220, 0.10)',
    },
    {
      title: 'Internet Of Things',
      info_one:
        'Dive into the interconnected world of IoT devices and discover their impact on industries. Learn about the latest trends, functionalities, and security measures for IoT devices.',
      info_two:
        'Stay informed about network status, vulnerabilities, and best practices for securing your IoT ecosystem.',
      link: '/iot',
      image: '/assets/iot-landing.jpeg',
      board_reversed: true,
      background_color: 'rgba(249, 200, 70, 0.10)',
    },
    {
      title: 'Cybersecurity',
      info_one:
        'Explore common cyber threats, learn best practices to protect your personal and financial information, and discover techniques to secure your digital presence.',
      info_two:
        'Stay up-to-date with the latest news, articles, and insights into encryption, secure communication, and safeguarding against cyber attacks.',
      link: '/cyber',
      image: '/assets/cyber-landing.jpeg',
      board_reversed: false,
      background_color: 'rgba(249, 110, 54, 0.30)',
    },
  ];
}
