import {createServer} from "http";
import {Server} from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: process.env.NODE_ENV === "production" ? false : ["http://localhost:5500", "http://127.0.0.1:5500"]
    }
})

// once ws connection is established listen for message
    io.on("connection", socket => {
        console.log(`User ${socket.id.substring(0,5)} connected`)
        console.log("Connection Made");
        socket.on("message", data => {
            console.log(data);
            io.emit("message",`UserId: ${socket.id.substring(0,5)} - ${data}`);
        })
    })

// set up socket.io to listen
    httpServer.listen(4321, ()=> console.log("Listening On 4321"));