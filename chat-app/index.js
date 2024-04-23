import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//socket .io
io.on('connection',(socket)=>{
    socket.on('user-message',(message)=>{
        // console.log('a new user msg',message);
        io.emit("message",message);
    })
});

app.use(express.static(path.resolve("./public")))//method of using static file

app.get('/',(req,res)=>{
  return res.sendFile("/public/index.html")
})

// WebSocket
server.listen(7000,()=>{
    console.log(`server run at port 7000`)
})