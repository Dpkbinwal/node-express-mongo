import express from "express";
import connectDB from "./db/connectdb.js";
import web from "./routes/web.js";

const PORT=3000;
const DB_URL="mongodb://localhost:27017";
const app = express();


// Connect to MongoDB database
connectDB(DB_URL);

// to get the json data (get)
app.use(express.json())

//load routes
app.use('/student',web);

app.listen(PORT,()=>{
    console.log(`server run at port ${PORT}`)
})



