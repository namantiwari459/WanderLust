# WanderLust 🏡

WanderLust is a full-stack accommodation listing web application built using Node.js, Express.js, MongoDB, Mongoose, EJS and Bootstrap.

The project allows users to view, create, edit and delete accommodation listings through a simple and responsive interface.

---

## 🚀 Features

- View all accommodation listings
- View individual listing details
- Create a new listing
- Edit existing listings
- Delete listings
- MongoDB database integration using Mongoose
- EJS templating
- EJS-Mate layout support
- Reusable Navbar and Footer components
- Method Override for PUT and DELETE requests
- Static CSS and frontend assets
- Bootstrap responsive UI
- Font Awesome icons
- Custom styling with CSS
- Sample listing data for database initialization

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- EJS
- Bootstrap
- Font Awesome

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Other Tools
- EJS-Mate
- Method-Override
- Git & GitHub

---

## 📁 Project Structure

```text
WanderLust/
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   └── listing.js
│
├── public/
│   └── css/
│       └── style.css
│
├── views/
│   ├── includes/
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   │
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   └── listings/
│       ├── edit.ejs
│       ├── index.ejs
│       ├── new.ejs
│       └── show.ejs
│
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

> `node_modules/` is present locally but is ignored by Git using `.gitignore`.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/namantiwari459/WanderLust.git
```

### 2. Move into the project directory

```bash
cd WanderLust
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is installed and running on your system.

The project uses the following local MongoDB database:

```text
mongodb://127.0.0.1:27017/wanderlust
```

### 5. Initialize the database

Run:

```bash
node init/index.js
```

This loads the sample listings into the `wanderlust` database.

### 6. Start the server

```bash
node app.js
```

The server will start on:

```text
http://localhost:8080
```

---

## 🌐 Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Home page |
| GET | `/listings` | Display all listings |
| GET | `/listings/new` | Form to create a listing |
| POST | `/listings` | Create a new listing |
| GET | `/listings/:id` | Display listing details |
| GET | `/listings/:id/edit` | Form to edit a listing |
| PUT | `/listings/:id` | Update a listing |
| DELETE | `/listings/:id` | Delete a listing |

---

## 🗄️ Listing Model

Each listing contains the following fields:

- `title`
- `description`
- `image`
- `price`
- `location`
- `country`

The `title` field is required, while the other fields are optional.

---

## 🎨 UI & Layout

The project uses **EJS-Mate** to create a reusable layout system.

The main boilerplate layout includes:

- Navbar
- Main content area
- Footer
- Bootstrap
- Font Awesome
- Custom CSS
- Google Font

Individual EJS pages use the common boilerplate layout instead of repeating the complete HTML structure.

---

## 📌 Current Progress

### Phase 1 ✅

- Express server setup
- MongoDB connection
- Mongoose model
- CRUD operations
- EJS views
- Listing management

### Phase 2 ✅

- EJS-Mate layouts
- Reusable Navbar
- Reusable Footer
- Bootstrap integration
- Font Awesome integration
- Custom CSS
- Responsive listing cards
- Improved New, Edit and Show pages

### Phase 3 🚧

- Middleware
- Error handling
- Further backend improvements

---

## 🔮 Future Improvements

Possible future features:

- User authentication
- User authorization
- Reviews and ratings
- Image upload
- Search and filtering
- Categories
- Maps/location integration
- Flash messages
- Better validation
- Deployment

---

## 👨‍💻 Author

**Tiwari Naman**

---

## ⭐ Project

WanderLust is being developed as a full-stack web development learning project while practicing Node.js, Express.js, MongoDB, Mongoose, EJS and related technologies.