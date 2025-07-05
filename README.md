# ProductHub

ProductHub is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It serves as a robust platform for managing products, including features for creating, reading, updating, and deleting product entries.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Product Management**: Create, view, update, and delete products.
- **Responsive UI**: User-friendly interface built with React.
- **RESTful API**: Robust backend with Express.js and MongoDB.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Languages**: JavaScript (100%)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Imesh-Bandar/ProductHub.git
   cd ProductHub
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables:**
   - Create a `.env` file in both `backend` and `frontend` directories as needed.
   - Example for backend:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```

5. **Start the application:**
   - Start backend server:
     ```bash
     cd backend
     npm start
     ```
   - Start frontend client:
     ```bash
     cd ../frontend
     npm start
     ```

6. **Open in browser:**  
   Visit [http://localhost:3000](http://localhost:3000) for the frontend.

## Usage

- Register/login as a user.
- Add, edit, or delete products.
- Explore the product list and use search/filter capabilities.

## Project Structure

```
ProductHub/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── public/
└── README.md
```

## API Endpoints

### Products

- `GET /api/products` - List all products
- `GET /api/products/:id` - Get product by ID
- `POST /api/products/create` - Create new product
- `PUT /api/products/edit/:id` - Update product
- `DELETE /api/products/delete/:id` - Delete product

### Auth

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

> *Note: Endpoints may be protected; use JWT token in headers where required.*

## Contributing

Contributions are welcome! Please open issues and submit pull requests for new features or bug fixes.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add your feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).

---

**Built with ❤️ using the MERN stack.**
