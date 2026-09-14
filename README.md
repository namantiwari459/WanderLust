# WanderLust

WanderLust is a basic accommodation listing web application built using Node.js, Express.js, MongoDB, Mongoose, and EJS.

This project is being developed as part of my full-stack web development learning journey.

## Features

- View all accommodation listings
- View details of a particular listing
- Create a new listing
- Edit an existing listing
- Delete a listing
- Store listing data in MongoDB
- Use Mongoose for database operations
- Use EJS for server-side rendering
- Use Method Override for PUT and DELETE requests

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Method Override
- HTML

## Project Structure

```text
WanderLust/
├── init/
│   ├── data.js
│   └── index.js
├── models/
│   └── listing.js
├── views/
│   └── listings/
│       ├── index.ejs
│       ├── new.ejs
│       ├── show.ejs
│       └── edit.ejs
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation

1. Clone the repository:

```bash
git clone <your-github-repository-url>
```

2. Open the project folder:

```bash
cd WanderLust
```

3. Install the required dependencies:

```bash
npm install
```

4. Make sure MongoDB is installed and running locally.

The project uses the following MongoDB connection:

```text
mongodb://127.0.0.1:27017/wanderlust
```

5. Start the server:

```bash
node app.js
```

6. Open the application in your browser:

```text
http://localhost:8080
```

## Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home route |
| GET | `/listings` | Display all listings |
| GET | `/listings/new` | Show form to create a new listing |
| POST | `/listings` | Create a new listing |
| GET | `/listings/:id` | Display a particular listing |
| GET | `/listings/:id/edit` | Show edit form |
| PUT | `/listings/:id` | Update a listing |
| DELETE | `/listings/:id` | Delete a listing |

## Database

MongoDB is used as the database for storing listing information.

Mongoose is used to define the listing schema and interact with MongoDB.

## Phase 1

Phase 1 of the WanderLust project includes the basic CRUD functionality:

- Create listings
- Read listings
- Update listings
- Delete listings

The project also includes EJS views for displaying and managing listings.

## Future Improvements

Future phases of the project will add more features and improve the overall functionality and user experience of the application.

## Author

Tiwari Naman