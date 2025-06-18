//Import the library

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


const app= express();
const port =3000;

//create simple server
app.listen(port,()=>{
    console.log("Server started on port "+port);
})