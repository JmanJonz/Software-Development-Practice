import express from "express";
// used to host frontend from same backend server
    import path from "path";
    // extra stuff for modules
        import { fileURLToPath } from "url";
import {Server} from "socket.io";
import { disconnect } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 4321;
const ADMIN = 'Admin';

const expressApp = express();

const expressServer = expressApp.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})

// state not saved on database...
    const UserState = {
        users: [],
        setUsers: function(newUsersArray){
            this.users = newUsersArray
        }
    }

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

        // upon connection - only to user that connected
            socket.emit("message", "Welcome to Chat App!");

        // upon connection to everyone but the person that connected
            socket.broadcast.emit("message", `User ${socket.id.substring(0,5)} connected`)

        // Listen for a message event
            socket.on("message", data => {
                console.log(data);
                io.emit("message",`UserId: ${socket.id.substring(0,5)} - ${data}`);
            })

        // when user disconnects - to all others
            socket.on("disconnect", ()=>{
                socket.broadcast.emit("message", `User ${socket.id.substring(0,5)} disconnected`)
            })

        // listen for activity
            socket.on("activity", (name)=>{
                socket.broadcast.emit('activity', name)
            })
    })

    function buildMsg(name, text){
        return {
            name,
            next,
            time: new Intl.DateTimeFormat('default', {
                hour: 'numeric',
                minute: 'numberic',
                second: 'numeric'
            }).format(new Date())
        }
    }

    // user functions updates user state when someone joins but doesn't make duplicates
        function activateUser(id, name, room){
            const user = {id, name, room};
            UserState.setUsers([...UsersState.users.filter(user => user.id !== id), user
            ])
            return user
        }
    // when user leaves itd sets user state to be all that was ther
    // but filtered so that the id that left is no longer there
        function userLeavesApp(id){
            UsersState.setUsers(
                usersState.users.filter(user => user.id !== id)
            )
        }

    // find the user we are looking for in state
    function getUser(id){
        return UserState.users.find(user => user.id === id);
    }

    // get all the users in the room 
        function getUsersInRoom(room){
            return UserState.users.filter(user => user.room === room)
        }
    // want to get all active rooms without duplicates so we turn
    // it into a set and then back into an array with no dups
        function getAllActiveRooms(){
            return Array.from(new Set(UsersState.users.map(user => user.room)))
        }