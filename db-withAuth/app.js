import express from "express";
import about from "./routes/about.js";
import connectDB from "./db/connectdb.js";
const PORT=process.env.PORT||3000;

// const DATABASE_URL="mongodb://dpk:123456@localhost:27017/schooldb?authSource=schooldb"; method1;
const DATABASE_URL= process.env.DATABASE_URL || "mongodb://localhost:27017";


connectDB(DATABASE_URL);

const app=express();

app.listen(PORT,()=>{
    console.log(`server run at port 8000`);
})