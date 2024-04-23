import express from "express";
import about from "./routes/about.js";

const app=express();

// app.get('/',(req,res)=>{
//     res.send("hello")
// })

app.use('/',about);

app.get('/',(req,res)=>{
    res.send({
        name: 'get request received'
    })
})

app.post('/',(req,res)=>{
    res.send({
        name: 'post request received'
    })
})

app.delete('/',(req,res)=>{
    res.send({
        name: 'delete request received'
    })
})

app.put('/',(req,res)=>{
    res.send({
        name: 'put request received'
    })
})



app.listen(8000,()=>{
    console.log("8000")
})