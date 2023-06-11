import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LearningResourceService {
  // Mock data for learning resources
  private learningResources = [
    {
      id: 1,
      title: 'What is cryptocurrency?',
      type: 'Article',
      content:
        'Cryptocurrency is a type of digital or virtual currency that uses cryptography for security. It operates independently of a central bank.',
    },
    {
      id: 2,
      title: 'How does cryptocurrency work?',
      type: 'Article',
      content:
        'Cryptocurrencies work using a technology called blockchain. Blockchain is a decentralized technology spread across many computers that manage and record transactions.',
    },
    {
      id: 3,
      title: 'What is blockchain?',
      type: 'Article',
      content:
        'Blockchain is a decentralized ledger of all transactions across a peer-to-peer network. This technology allows participants across the network to confirm transactions without the need for a central clearing authority.',
    },
    {
      id: 4,
      title: 'What is Bitcoin?',
      type: 'Article',
      content:
        'Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.',
    },
    {
      id: 5,
      title: 'What is Ethereum?',
      type: 'Article',
      content:
        'Ethereum is a decentralized, open-source blockchain featuring smart contract functionality. Ether (ETH) is the native cryptocurrency of the platform.',
    },
    {
      id: 6,
      title:
        'Cryptocurrency and Blockchain: An Introduction to Digital Currencies',
      type: 'Course',
      content:
        'This course provides an introduction to digital currencies, blockchain, FinTech, finance, investment management, financial management, regulations and compliance, risk management. It is offered by the University of Michigan.',
    },
    {
      id: 7,
      title: 'Blockchain and Cryptocurrency Explained',
      type: 'Course',
      content:
        'This course places bitcoin and cryptocurrencies in the broader framework of the history of money, before talking about the practical implementation of bitcoin, other cryptocurrencies.',
    },
    {
      id: 8,
      title: 'Crypto basics - Coinbase',
      type: 'Article',
      content:
        "This resource provides a guide to the best and smartest crypto articles, podcasts, and YouTube videos. It also talks about Bitcoin as the world's first widely adopted cryptocurrency.",
    },
    {
      id: 9,
      title: 'Bitcoin whitepaper: A Peer-to-Peer Electronic Cash System',
      type: 'Article',
      content:
        "Satoshi Nakamoto's 2009 whitepaper that started it all - technical, but more readable than you'd assume.",
    },
    {
      id: 10,
      title: 'Cryptocurrency: The Future of Finance and Money',
      type: 'Video',
      content:
        'In this four-minute video, experts from Coinbase and across the crypto universe dive into the democratizing potential of cryptocurrency.',
    },
    {
      id: 11,
      title: 'Learn Hub | ethereum.org',
      type: 'Article',
      content:
        'Your educational guide to the world of Ethereum. Learn how Ethereum works and how to connect to it. This page includes technical and non-technical articles, guides, and resources.',
    },
    {
      id: 12,
      title: 'Mastering Bitcoin: Unlocking Digital Cryptocurrencies',
      type: 'Book',
      content:
        'Written by Andreas Antonopoulos, a respected figure in the Bitcoin world, this book is an essential technical guide that covers the history, workings, and potential of Bitcoin.',
    },
    {
      id: 13,
      title:
        'The Age of Cryptocurrency: Bitcoin and the Fight for the Future of Money',
      type: 'Book',
      content:
        'This book by Paul Vigna and Michael J. Casey provides a thorough introduction to the rise of Bitcoin and discusses its potential impact on global finance.',
    },
    {
      id: 14,
      title:
        "Cryptoassets: The Innovative Investor's Guide to Bitcoin and Beyond",
      type: 'Book',
      content:
        'This book provides a guide to investing in Bitcoin and other crypto assets, and discusses the future potential of blockchain technology.',
    },
    {
      id: 15,
      title:
        'The Basics of Bitcoins and Blockchains: An Introduction to Cryptocurrencies and the Technology that Powers Them',
      type: 'Book',
      content:
        'This book provides a comprehensive overview of the history and mechanics of Bitcoin, as well as other cryptocurrencies, and the underlying blockchain technology.',
    },
    {
      id: 16,
      title: 'Advanced Cryptocurrency Trading: Blockchain and Digital Trading',
      type: 'Course',
      content:
        'This course provides advanced trading strategies for Bitcoin and other cryptocurrencies and discusses the future trends in digital trading.',
    },
    {
      id: 17,
      title: 'Blockchain Advanced Level: Uses Beyond Bitcoin',
      type: 'Course',
      content:
        'This course explores the advanced applications of blockchain technology beyond Bitcoin and cryptocurrencies.',
    },
    {
      id: 18,
      title: 'Cryptocurrency Crisis and Future Predictions',
      type: 'Article',
      content:
        'This article discusses the current crisis in the cryptocurrency market and provides expert predictions about the future of digital currencies.',
    },
    {
      id: 19,
      title: 'Understanding DeFi: Decentralized Finance',
      type: 'Course',
      content:
        'This course provides a comprehensive understanding of Decentralized Finance (DeFi), its applications, and its impact on the global financial system.',
    },
    {
      id: 20,
      title: 'The Rise of NFTs: Non-Fungible Tokens',
      type: 'Article',
      content:
        'This article explores the rise of Non-Fungible Tokens (NFTs), their applications, and how they are changing the world of digital art and collectibles.',
    },
    {
      id: 21,
      title: 'Cryptocurrency Trading Strategies',
      type: 'Course',
      content:
        'This course provides an in-depth understanding of various cryptocurrency trading strategies and how to apply them in different market conditions.',
    },
    {
      id: 22,
      title: 'Influence of Social Media on Cryptocurrency Markets',
      type: 'Article',
      content:
        'This article discusses the significant influence of social media on cryptocurrency markets and how traders use social media trends for investment decisions.',
    },
    {
      id: 23,
      title: 'Exploring Altcoins: Beyond Bitcoin and Ethereum',
      type: 'Course',
      content:
        'This course explores various alternative cryptocurrencies (Altcoins) beyond Bitcoin and Ethereum, their unique features, and their potential for future growth.',
    },
    {
      id: 24,
      title: 'The Impact of Cryptocurrency on the Global Economy',
      type: 'Article',
      content:
        'This article discusses the impact of cryptocurrency on the global economy, its potential to disrupt traditional financial systems, and its implications for global economic policies.',
    },
    {
      id: 25,
      title: 'Blockchain Technology: Beyond Cryptocurrency',
      type: 'Course',
      content:
        'This course explores the applications of blockchain technology beyond cryptocurrency, including supply chain, healthcare, finance, and more.',
    },
  ];

  constructor(private http: HttpClient) {}

  getLearningResources(): Observable<any> {
    // Return the mock data as an Observable
    return of(this.learningResources);
  }
}
