// setting up a server on same address and same port to listen 
// for requests for both express http requests and simultaneously 
// for websocket connections
// we are also going to serve our frontend files as well using express
// all from the same address and port

import express from 'express';
import {Server} from 'socket.io';
// used to create a path for serving frontend from express
    import path from 'path';
    import { fileURLToPath } from "url";
// import mock database
    import mockDB from './mockDB.js';

// setting up express http server and socket.io on same address, port.
// listening for requests at the same door like two people waiting for someone
// to knock at the door and both responding differently. 
    const PORT = process.env.PORT || 4321;
    const expressApp = express();
    const expressServer = expressApp.listen(PORT, ()=>{
        console.log(`Server Awaiting Requests On Port ${PORT}`);
    })

// serve frontend
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    expressApp.use(express.static(path.join(__dirname, 'frontend-server/dist')))

// setting up socket.io websocket configurations and starting listening
    const io = new Server(expressServer, {
        cors: {
            // you shouldn't do this but I wanted to connect from my phone 
            // and my laptops ip address isn't the same as localhost even though in 
            // some ways it's the same thing
            // '*' allows to connect from anywhere on the network
                origin: '*'
        }
    })

    // listen for websocket connection and keep everything websocket inside 
    // here so it only works if there is a connection
    // *** socket is for each socket connection
    // ****** io is for all connected sockets
        io.on('connection', socket => {
            console.log(socket.id)
        // looks like all socket listeners need to be inside initial listener
        // connection...
        // Anddddd you need to use socket not io after!
        // this is message coming in to be sent out by server
            socket.on('clientToServer', ({id, message, room})=>{
                if(room !== '' && id !== ''){
                    if(mockDB.userCanEnterRoom(id, room)){
                        socket.join(room);
                        socket.to(room).emit('serverToClient', `Message from ${socket.id}: ${message}`)
                    }else{
                        io.to(socket.id).emit('serverToClient', `You are not authorized to join this room`)
                    }
                }else{
                    io.to(socket.id).emit('serverToClient', `Error You Need To Include Valid Id And Room`)
                }
            })
        })


    



