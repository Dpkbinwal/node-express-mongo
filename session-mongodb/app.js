import express from "express";
import router from "./routes/web.js";
import session from "express-session";
import connectDB from "./db/connectdb.js";
import MongoStore from "connect-mongo";
const app=express();

const DATABASE_URL= process.env.DATABASE_URL || "mongodb://localhost:27017";


connectDB(DATABASE_URL);
//mongodb-session
const sessionStorage= MongoStore.create({
    mongoUrl: DATABASE_URL,
    dbName: 'schooldb',
    collectionName:'sessions',
    ttl: 14*24*60*60 , //expire in 14 days, default and only if maxsize is not given in session
    autoRemove:'native'
})


//session
app.use(session({
    name:'sessiongeek',
    secret:"iamkey",
    resave:false,
    saveUninitialized: true,
    cookie:{maxAge:50000},
    store:sessionStorage
}))


app.use('/',router);

app.listen(8000,()=>{
    console.log("8000")
})