//Import the library

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


const app= express();
const port =3000;


//create simple get route
app.get("/",(req,res)=>{
    res.send("GET Method is ready to use");
})


//create simple server
app.listen(port,()=>{
    console.log("Server started on port "+port);
})