# ProShopX

ProShopX is a full-stack, cloud-based e-commerce platform that provides a seamless shopping experience for customers and a robust management system for store owners. It leverages modern technologies and best practices to deliver high performance and scalability.

## Application Architecture

ProShopX is a full-stack application with a front-end built with Angular and a back-end built with .NET Core.

- **Front-End (Angular):** The front-end is a Single Page Application (SPA) built with Angular. It provides a dynamic and interactive user interface.

- **Back-End (.NET Core):** The back-end is a RESTful API built with .NET Core. It handles business logic, database operations, and server-side rendering.

- **Database:** MongoDB is used for storing data and Redis for caching to improve performance.

- **Cloud Platform:** The application is deployed on a cloud platform like AWS or Azure.

## UI/UX Design

The user interface is clean, intuitive, and responsive. Here are the key pages/components:

- **Home Page:** Displays featured products and categories. Implements a carousel for featured products and a grid view for categories.

- **Product Page:** Shows product details, images, reviews, and add to cart button. Implements a zoom feature for images and a rating system for reviews.

- **Cart Page:** Shows items in the cart, allows quantity changes, and provides a checkout button. Implements a mini cart that shows the current items and total price.

- **Checkout Page:** Collects shipping and payment information, and places the order. Implements a multi-step process for shipping, payment, and confirmation.

- **Order Page:** Shows order details and status. Implements a tracking system that shows the delivery status of the order.

- **Admin Dashboard:** Manages products, orders, and users. Implements charts and graphs for sales and user data.

## Database Schema

The database has collections for users, products, orders, and reviews:

- **Users:** Stores user information like name, email, password (hashed), isAdmin (boolean), and a list of favorite products.

- **Products:** Stores product information like name, description, price, image URLs, category, stock quantity, and a list of related products.

- **Orders:** Stores order information like user, order items, shipping address, payment method, payment result, delivery status, and order history.

- **Reviews:** Stores review information like user, product, rating, comment, and date of review.

## RESTful APIs

The front-end and back-end communicate via RESTful APIs:

- **User APIs:** Register, login, get user profile, update user profile, get favorite products, add to favorite products.

- **Product APIs:** Get all products, get product by ID, create product, update product, delete product, get related products.

- **Order APIs:** Create order, get order by ID, update order to paid, update order to delivered, get order history.

- **Review APIs:** Create review, get all reviews for a product, get recent reviews.
