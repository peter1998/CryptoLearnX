# CryptoLearnX

CryptoLearnX is a full-stack, cloud-based platform that provides a comprehensive learning experience for those interested in cryptocurrencies. It leverages modern technologies and best practices to deliver high performance and scalability.

![image](https://github.com/peter1998/CryptoLearnX/assets/19347046/21377ff3-93f7-4734-9984-62c8be95a73e)

![image](https://github.com/peter1998/CryptoLearnX/assets/19347046/b3e15692-1e1c-49b6-955f-a945481dabf2) 

![image](https://github.com/peter1998/CryptoLearnX/assets/19347046/61b506eb-df46-44fd-951b-975824070c26)

![image](https://github.com/peter1998/CryptoLearnX/assets/19347046/1499a60f-6416-474a-827a-ad7b7272e2f3)




## Getting Started
To get the project running locally:

- Clone this repo
- npm install to install all required dependencies
- ng serve to start the local server (this project uses Angular CLI)

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

## Sections
CryptoLearnX is divided into several sections, each providing detailed information and learning resources on a specific topic.

# Cryptocurrency Section: 
This section provides detailed information about various cryptocurrencies. It includes real-time price data, historical price charts, market cap, volume, and other relevant information. Users can add cryptocurrencies to their watchlist and view detailed information about each one.

# Internet of Things (IoT) Section: 
This section educates users about IoT. It includes articles, videos, and interactive content about IoT concepts, technologies, use cases, and security considerations. Real-world examples of IoT devices and systems are also included.

# Cybersecurity Section: 
This section provides information about various cybersecurity topics. This includes information about common threats, security best practices, encryption, network security, etc. Interactive quizzes or games are also included to test users' knowledge.

Interactive Charts and Animations: Interactive charts and animations are used throughout the app to make it more engaging and to help users better understand the data. For example, interactive charts show the price history of a cryptocurrency, or an animation explains how a blockchain works.

Information Section: This section provides general information about the platform, such as how to use it, terms of service, privacy policy, etc. It also includes a FAQ section to answer common questions.

User Profiles: Users can create profiles to personalize their experience. They can save their favorite cryptocurrencies, track their learning progress, set learning goals, etc.

Community Features: Features that allow users to interact with each other, such as forums, chat rooms, or social media integrations are included. This helps create a sense of community and makes the platform more engaging.

Mobile-Friendly Design: The platform is responsive and works well on all devices, including desktops, tablets, and mobile phones.

## Future Plans
We are constantly working to improve CryptoLearnX and add new features. Here are some things we are planning to work on next:

User Authentication: Implement user authentication using JWT (JSON Web Tokens) to allow users to create accounts and save their progress.

Advanced Search: Improve the search functionality to allow users to search for cryptocurrencies by name, category, and other criteria.

Interactive Charts: Add interactive charts to the cryptocurrency detail pages to display price history and other data.

Mobile App: Develop a mobile app version of CryptoLearnX to allow users to learn on the go.

Community Features: Add features like forums and user groups to allow users to connect with each other and share their learning experiences.

More Learning Resources: Continue to add more articles,videos, quizzes, and other learning resources to the platform.

## Contributing
We welcome contributions from the community. If you have an idea for a new feature or an improvement, please open an issue to discuss it. If you would like to contribute code, please open a pull request.

## License
CryptoLearnX is licensed under the MIT License. See the LICENSE file for more details.

## Currently Working On
We are currently enhancing the homepage with the following features:

Hero Section: A compelling headline and a brief description of what the app offers with a call-to-action button.

Featured Cryptocurrencies: Highlighting some popular or trending cryptocurrencies right on the homepage.

Latest News or Updates: Keeping users informed about the latest news or updates in the cryptocurrency world.

Interactive Chart or Infographic: An interactive chart or infographic that shows interesting data about cryptocurrencies.

User Testimonials or Reviews: Showcasing some testimonials or reviews on the homepage to help build trust with new users.

Footer: Including links to important pages like the About page, Contact page, and Terms of Service.

Responsive and User-Friendly Design: Ensuring that the homepage looks great and is easy to navigate on all devices, from desktops to smartphones.

## Roadmap
Here's a roadmap to guide the development of the Cryptocurrency section:

Homepage: The homepage will serve as the entry point to the three main sections of the app (Cryptocurrency, IoT, Cybersecurity). Each section can be represented with an engaging icon and a brief description. The user can click on the section they're interested in to navigate to that section.

Cryptocurrency Section Landing Page: This page will provide an overview of the Cryptocurrency section. It could include a brief introduction to cryptocurrencies, a list or grid of available cryptocurrencies to explore, and perhaps some featured content or news about cryptocurrencies.

Individual Cryptocurrency Pages: When a user clicks on a specific cryptocurrency from the landing page, they'll be taken to a detailed page about that cryptocurrency. This page will include real-time price data, interactive historical price chart, market cap, volume, and other relevant data, brief description of the cryptocurrency and its technology, news feed related to the cryptocurrency, and an option to add the cryptocurrency to the user's watchlist.

Watchlist: Users can add cryptocurrencies to their watchlist. The watchlist will display a list of the user's chosen cryptocurrencies along with some key data (e.g., current price, daily change). Users can click on a cryptocurrency in their watchlist to view its detailed page.

Learning Resources: Include a section with educational resources about cryptocurrencies. This could include articles, videos, tutorials, quizzes, etc. You could categorize the resources by topic (e.g., "What is Bitcoin?", "How does blockchain work?", "Investing in cryptocurrencies") to make it easy for users to find what they're interested in.

Interactive Features: To make the app more engaging, consider adding some interactive features. For example, you could include a cryptocurrency price prediction game, where users can guess what the price of a cryptocurrency will be at a certain time and earn points if they're close to the actual price.

User Profiles and Personalization: Allow users to create profiles and personalize their experience. For example, users could set their preferred default view (e.g., list or grid), choose which data points they want to see for each cryptocurrency, set price alerts, etc.
