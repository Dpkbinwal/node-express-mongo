import express from 'express';
import connectDB from './db/connectdb.js';
import { updateById,deleteById } from './models/Student.js';
const app = express();
const PORT=3000;

const DATABASE_URL= process.env.DATABASE_URL || "mongodb://localhost:27017";

connectDB(DATABASE_URL);
// updateById('Deepak')
deleteById('65f1ca64f471faf6dff97232')
// updateById('65f1a0baf89406bd445da420')

app.listen(PORT,()=>{

    // console.log('listening on port '+PORT);
    console.log(`server run at ${PORT}`);
})
