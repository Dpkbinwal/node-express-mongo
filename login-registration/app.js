import dotenv from 'dotenv';
import express from "express";
import connectDB from "./db/connectdb.js";
import web from './routes/web.js';
dotenv.config();

const DATABASE_URL= process.env.DATABASE_URL;
const PORT=process.env.PORT;
const app=express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))
connectDB(DATABASE_URL);

app.use('/',web)


app.listen(PORT,()=>{
    console.log(`server run at port ${PORT}`);
})