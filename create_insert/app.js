import express from 'express';
import connectDB from './db/connectdb.js';
//  import './models/Student.js';
import {insertMultiDoc,insertSingleDoc} from './models/Student.js';

const app=express();

const PORT=process.env.PORT || 3000;

const DATABASE_URL= process.env.DATABASE_URL || "mongodb://localhost:27017";


connectDB(DATABASE_URL);
//create and save document
// insertSingleDoc('Hemant',25,19998.0,['gym','friends'],false,[{value:'send me'}]);
// createDoc('Deepak',22,1000000.0,['development','coder'],false,[{value:'hire me '}])



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})