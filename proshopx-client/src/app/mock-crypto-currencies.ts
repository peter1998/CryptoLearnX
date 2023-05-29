export interface CryptoCurrency {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  rating: number;
  stock: number;
}

export const CRYPTOCURRENCIES: CryptoCurrency[] = [
  {
    id: 1,
    name: 'Bitcoin',
    description: 'The first and most well-known cryptocurrency.',
    price: 50000,
    imageUrl: 'https://via.placeholder.com/150',
    category: 'Cryptocurrency',
    rating: 4.5,
    stock: 20,
  },
  // Add more cryptocurrencies as needed
];
