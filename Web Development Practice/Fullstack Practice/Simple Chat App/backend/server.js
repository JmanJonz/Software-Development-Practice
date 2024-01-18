import {WebSocketServer} from "ws";
const server = new WebSocketServer({port: "3000"});

// once ws connection is established listen for message
    server.on("connection", socket => {
        console.log("Connection Made");
        socket.on("message", message => {
            const b = Buffer.from(message);
            console.log(b.toString());
            socket.send(`${message}`);
        })
    })