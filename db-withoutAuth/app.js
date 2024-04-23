import express from "express";
import about from "./routes/about.js";
import connectDB from "./db/connectdb.js";

const DATABASE_URL="mongodb://localhost:27017/schooldb";
const PORT=process.env.PORT||3000;

// mongoose.connect("mongodb://localhost:27017/schooldb")
// .then(()=>{
//     console.log('connected successfully');
// })

connectDB(DATABASE_URL);

const app=express();

app.listen(PORT,()=>{
    console.log(`server run at port 8000`);
})