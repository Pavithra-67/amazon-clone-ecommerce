E-Commerce App
A full-stack e-commerce web application built with React (frontend), Express + MongoDB (backend), and a set of static HTML templates.
Features
Browse products with images and details
Product search
Product detail page
Shopping cart
REST API backend with MongoDB database
Tech Stack
Frontend: React, React Router, React Toastify
Backend: Node.js, Express, Mongoose (MongoDB)
Other: Static HTML/CSS templates (`templates/`)
Project Structure
```
e-commerce/
├── backend/
│   ├── config/         # Database connection & environment config
│   ├── controllers/    # Route logic
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   ├── data/           # Seed/sample data
│   └── app.js           # Express app entry point
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/ # Header, Footer, ProductCard, Search
│       └── pages/      # Home, Cart, ProductDetail
└── templates/           # Static HTML version (index, details, cart)
```
Getting Started
Prerequisites
Node.js installed
MongoDB running locally (or a MongoDB Atlas connection string)
Backend Setup
```bash
cd backend
npm install
```
Create a `config/config.env` file (use `config.env.example` as a reference):
```
PORT=8000
NODE_ENV=development
DB_URL=mongodb://localhost:27017/mini-ecommerce
```
Start the backend:
```bash
npm start
```
The API will run at `http://localhost:8000/api/v1`
Frontend Setup
```bash
cd frontend
npm install
```
Create a `.env` file in `frontend/`:
```
REACT_APP_API_URL=http://localhost:8000/api/v1
```
Start the frontend:
```bash
npm start
```
The app will run at `http://localhost:3000`
API Endpoints
Method	Endpoint	Description
GET	/api/v1/products	Get all products
GET	/api/v1/product/:id	Get single product
GET	/api/v1/orders	Get orders
POST	/api/v1/order/new	Create a new order
(Update this table to match your actual routes in `backend/routes/`)
Screenshots
(Add screenshots of your homepage, product detail page, and cart here)
License
This project is open source and available under the MIT License.