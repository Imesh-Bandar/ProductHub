import express from 'express';
import dotenv from 'dotenv';
import { connectMongoDB } from './config/dbconnection.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = 5000;

// implement the root route
app.get('/', (req, res) => {
    res.send('Welcome to ProductHub API');
})


// //LOG ENVIRONMENT VARIABLES
// console.log('Environment Variables:');
// console.log(process.env.MONGO_URL);


// create simple server
app.listen(PORT, () => {
    connectMongoDB();
    console.log(`Server started successfully at http://localhost:${PORT}`);
});