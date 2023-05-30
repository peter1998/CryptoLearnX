# CryptoLearnX

CryptoLearnX is a full-stack, cloud-based platform that provides a comprehensive learning experience for those interested in cryptocurrencies. It leverages modern technologies and best practices to deliver high performance and scalability.

## Application Architecture

CryptoLearnX is a full-stack application with a front-end built with Angular and a back-end built with .NET Core.

- **Front-End (Angular):** The front-end is a Single Page Application (SPA) built with Angular. It provides a dynamic and interactive user interface.

- **Back-End (.NET Core):** The back-end is a RESTful API built with .NET Core. It handles business logic, database operations, and server-side rendering.

- **Database:** MongoDB is used for storing data and Redis for caching to improve performance.

- **Cloud Platform:** The application is deployed on a cloud platform like AWS or Azure.

## UI/UX Design

The user interface is clean, intuitive, and responsive. Here are the key pages/components:

- **Home Page:** Displays featured cryptocurrencies and categories. Implements a carousel for featured cryptocurrencies and a grid view for categories.

- **Cryptocurrency Page:** Shows cryptocurrency details, images, real-time price data, and add to watchlist button. Implements a zoom feature for images and a rating system for reviews.

- **Watchlist Page:** Shows items in the watchlist, allows quantity changes, and provides a checkout button. Implements a mini cart that shows the current items and total price.

- **Learning Resources:** Include a section with educational resources about cryptocurrencies. This could include articles, videos, tutorials, quizzes, etc. You could categorize the resources by topic (e.g., "What is Bitcoin?", "How does blockchain work?", "Investing in cryptocurrencies") to make it easy for users to find what they're interested in.

## Database Schema

The database has collections for users, cryptocurrencies, and watchlist:

- **Users:** Stores user information like name, email, password (hashed), isAdmin (boolean), and a list of favorite cryptocurrencies.

- **Cryptocurrencies:** Stores cryptocurrency information like name, description, price, image URLs, market cap, volume, and a list of related cryptocurrencies.

- **Watchlist:** Stores watchlist information like user, watchlist items, and date of watchlist.

## RESTful APIs

The front-end and back-end communicate via RESTful APIs:

- **User APIs:** Register, login, get user profile, update user profile, get favorite cryptocurrencies, add to favorite cryptocurrencies.

- **Cryptocurrency APIs:** Get all cryptocurrencies, get cryptocurrency by ID, create cryptocurrency, update cryptocurrency, delete cryptocurrency, get related cryptocurrencies.

- **Watchlist APIs:** Create watchlist, get watchlist by ID, update watchlist, delete watchlist.

## Currently Working On

Enhancing the homepage with the following features:

- **Hero Section:** A compelling headline and a brief description of what the app offers with a call-to-action button.

- **Featured Cryptocurrencies:** Highlighting some popular or trending cryptocurrencies right on the homepage.

- **Latest News or Updates:** Keeping users informed about the latest news or updates in the cryptocurrency world.

- **Interactive Chart or Infographic:** An interactive chart or infographic that shows interesting data about cryptocurrencies.

- **User Testimonials or Reviews:** Showcasing some testimonials or reviews on the homepage to help build trust with new users.

- **Footer:** Including links to important pages like the About page, Contact page, and Terms of Service.

- **Responsive and User-Friendly Design:** Ensuring that the homepage looks great and is easy to navigate on all devices, from desktops to smartphones.
