import express from 'express';
import connectDB from './db/connectdb.js';
//  import './models/Student.js';

const app=express();

const PORT=process.env.PORT || 3000;

const DATABASE_URL= process.env.DATABASE_URL || "mongodb://localhost:27017";


connectDB(DATABASE_URL);


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})