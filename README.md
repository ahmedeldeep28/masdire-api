# MSADER API

This is the backend API for the masdire project, built with Node.js and Express.

## Project Structure

- `index.js` - Main entry point of the application
- `package.json` - Project dependencies and scripts
- `vercel.json` - Vercel deployment configuration
- `controllers/` - Contains controller files for handling business logic
- `models/` - Contains Mongoose models for MongoDB collections
- `routers/` - Contains Express route definitions
- `images/` - Static images used by the application

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (Node package manager)
- MongoDB database (local or cloud)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ahmedeldeep28/masadir-api.git
   cd masadir-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your MongoDB connection string in `models/DB_URL.js`.

### Running the Application
To start the server:
```sh
node index.js
```

Or, if you have nodemon installed:
```sh
nodemon index.js
```

The server will start on the port specified in your code (default: 3000).

### API Endpoints
The API provides endpoints for managing articles, authentication, categories, contacts, FAQs, interested users, subscriptions, and suggestions. Each resource has its own router and controller.

Example endpoint structure:
- `/api/articles`
- `/api/auth`
- `/api/categorys`
- `/api/contact`
- `/api/faqs`
- `/api/interested`
- `/api/subscribe`
- `/api/suggest`

Refer to the respective router and controller files for detailed endpoint information.

### Deployment
This project includes a `vercel.json` file for deployment on Vercel. Make sure to configure your environment variables on Vercel for production use.

## License
Specify your license here.

## Contact
For questions or support, contact the project maintainer.
