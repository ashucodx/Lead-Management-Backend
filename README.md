# Lead Management - Backend

A Node.js, Express, and MongoDB backend for a lead management .

## Features

- RESTful API for lead management
- CRUD operations for leads
- Input validation and error handling
- MongoDB integration with Mongoose
- Pagination and filtering

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/leads | Get all leads |
| POST | /api/leads | Create a new lead |
| GET | /api/leads/:id | Get a single lead |
| PUT | /api/leads/:id | Update a lead |
| DELETE | /api/leads/:id | Delete a lead |

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file and add your environment variables
4. Start the server: `npm run dev`

## Environment Variables

Create a `.env` file in the root directory with the following variables:
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_connection_string


## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- Validator.js
