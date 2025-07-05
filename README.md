# ProductHub Backend

This is the backend portion of the **ProductHub** MERN stack project.  
It provides a RESTful API for product management, user authentication, and other core features.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [MongoDB Setup](#mongodb-setup)
  - [Create a Database](#1-create-a-database-using-mongodb)
  - [Get Connection String](#2-get-the-mongodb-connection-string)
  - [Set Environment Variable](#3-set-up-environment-variable)
- [Running the Backend Server](#running-the-backend-server)
- [API Overview](#api-overview)
- [Environment Variables Reference](#environment-variables-reference)
- [Useful Scripts](#useful-scripts)
- [Enhancements](#enhancements)

---

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose ODM)
- **JWT** for authentication (if implemented)
- **dotenv** for environment variables

---

## Prerequisites

- Node.js (Recommended v18+)
- npm (comes with Node.js)
- MongoDB Atlas account (cloud) OR MongoDB installed locally

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Imesh-Bandar/ProductHub.git
   cd ProductHub/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## MongoDB Setup

### 1. Create a Database Using MongoDB

You can use either **MongoDB Atlas** (cloud) or **Local MongoDB**.

#### Using MongoDB Atlas (Recommended)

- Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Click "Build a Database" and choose the free tier.
- After the cluster is provisioned, click "Browse Collections" → "Add My Own Data".
- Enter a **Database Name** (e.g., `producthub`) and a **Collection Name** (e.g., `products`).

#### Using Local MongoDB

- [Download MongoDB Community Server](https://www.mongodb.com/try/download/community) and install it.
- Start your MongoDB server:
  ```
  mongod
  ```
- Use [MongoDB Compass](https://www.mongodb.com/products/compass) or the shell to create a database.

---

### 2. Get the MongoDB Connection String

#### For MongoDB Atlas

- In your Atlas cluster, click **Connect** → **Connect your application**.
- Copy the connection string, which looks like:
  ```
  mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority
  ```
- Replace `<username>`, `<password>`, and `<dbname>` with your credentials and DB name.

#### For Local MongoDB

- Default connection string:
  ```
  mongodb://localhost:27017/<dbname>
  ```
  Replace `<dbname>` with your chosen database name.

---

### 3. Set Up Environment Variable

1. In the backend root, create a `.env` file:
   ```
   touch .env
   ```
2. Add the following:
   ```
   MONGODB_URI=your_connection_string_here
   JWT_SECRET=your_jwt_secret_here
   PORT=5000
   ```
   - Replace `your_connection_string_here` with your MongoDB URI.
   - Replace `your_jwt_secret_here` with a random secret for JWT authentication (if used).

3. Ensure `.env` is in `.gitignore` to keep credentials safe.

---

## Running the Backend Server

```bash
npm start
```
or (with auto-restart on code changes, if using nodemon):
```bash
npm run dev
```
The server will run on `http://localhost:5000` by default.

---

## API Overview

Here’s a sample of possible endpoints (customize based on your implementation):

 

### Product Routes

| Method | Endpoint       | Description             |
|--------|----------------|-------------------------|
| GET    | /api/products  | Get all products        |
| GET    | /api/products/:id | Get product by ID    |
| POST   | /api/products  | Add a new product       |
| PUT    | /api/products/:id | Update a product     |
| DELETE | /api/products/:id | Delete a product     |

*(Update endpoints as per your actual implementation)*

---

## Environment Variables Reference

| Variable      | Description                                | Example                                   |
|---------------|--------------------------------------------|-------------------------------------------|
| MONGODB_URI   | MongoDB connection string                  | mongodb+srv://user:pass@cluster.mongodb.net/producthub |
| JWT_SECRET    | JWT secret for signing tokens (if using JWT)| mysecretkey                               |
| PORT          | Port the server runs on                    | 5000                                      |

---

## Useful Scripts

| Command         | Description                                 |
|-----------------|---------------------------------------------|
| npm start       | Start server (production)                   |
| npm run dev     | Start server with nodemon (development)     |

---

## Enhancements

Here are some suggestions for enhancing this backend:

- **Validation**: Use `joi` or `express-validator` to validate incoming data.
- **Testing**: Add unit & integration tests using Jest or Mocha.
- **Error Handling**: Implement centralized error handling middleware.
- **Rate Limiting**: Protect APIs from abuse.
- **API Documentation**: Integrate Swagger or similar tools.
- **Logging**: Use `winston` or `morgan` for advanced logging.
- **CI/CD**: Set up GitHub Actions for automated testing and deployment.
- **Security**: Use helmet.js and sanitize user input.
- **Role-based Access Control**: Implement roles (user/admin, etc).

---

## License

This project is open-source and available under the [MIT License](LICENSE).
