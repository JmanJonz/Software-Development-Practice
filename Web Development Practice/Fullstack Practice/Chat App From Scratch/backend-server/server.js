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
    expressApp.use(express.static(path.join(__dirname, 'frontend-server')))

// setting up socket.io websocket configurations and starting listening
    const io = new Server(expressServer, {
        cors: {
            origin: ["http://localhost:4321", "http://127.0.0.1:4321"]
        }
    })

    // listen for websocket connection and keep everything websocket inside 
    // here so it only works if there is a connection


