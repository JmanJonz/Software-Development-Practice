import express from "express";
// used to host frontend from same backend server
    import path from "path";
    // extra stuff for modules
        import { fileURLToPath } from "url";
import {Server} from "socket.io";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 4321;

const expressApp = express();

const expressServer = expressApp.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})

// unlike commonjs in modules __dirname is not in scope so you need to do some extra stuff to get it all figured out
    expressApp.use(express.static(path.join(__dirname, "frontend")))

const io = new Server(expressServer, {
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