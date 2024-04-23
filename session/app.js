import express from "express";
import router from "./routes/web.js";
import session from "express-session";

const app=express();

//session
app.use(session({
    // name:'sessiongeek',
    secret:"iamkey",
    resave:false,
    saveUninitialized: true,
    cookie:{maxAge:50000}
}))


app.use('/',router);

app.listen(8000,()=>{
    console.log("8000")
})