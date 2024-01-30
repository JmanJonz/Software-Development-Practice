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
        origin: process.env.NODE_ENV === "production" ? false : ["http://localhost:4321", "http://127.0.0.1:4321"]
    }
})

// once ws connection is established listen for message
    io.on("connection", socket => {
        console.log(`User ${socket.id.substring(0,5)} connected`)
        console.log("Connection Made");

        // upon entering a room
            socket.on("enterRoom", ({name, room})=>{
                // leave a previous room if user was in a previous room
                    const prevRoom = getUser(socket.id)?.room

                    if(prevRoom){
                        socket.leave(prevRoom)
                        io.to(prevRoom).emit('message', buildMsg(ADMIN, `${name} has left the room`))
                    }

                    const user = activateUser(socket.id, name, room)

                    // cannot update previous room users list until after the state update in activate user
                        if(prevRoom){
                            io.to(prevRoom).emit('userList', {
                                users: getUsersInRoom(prevRoom)
                            })
                        }

                    // join new room
                        socket.join(user.room)

                    // to user who joined
                        socket.emit("message", buildMsg(ADMIN, `You have joined the ${user.room} chat room`))

                    // to everyone else
                        socket.broadcast.to(user.room).emit('message', buildMsg(ADMIN, `${user.name} has joined the room`))

                    // update userlist for room
                        io.to(user.room).emit('userList', {
                            users: getUsersInRoom(user.room)
                        })

                    // update the active roomslist for everyone
                        io.emit('roomsList', {
                            rooms: getAllActiveRooms()
                        })
            })

            // when user disconnects - to all others
            socket.on("disconnect", ()=>{
                const user = getUser(socket.id)
                userLeavesApp(socket.id)

                if(user){
                    io.to(user.room).emit('message', buildMsg(ADMIN, `${user.name} has left the room`))
                    io.to(user.room).emit('userList', {
                        users: getUsersInRoom(user.room)
                    })
                    io.emit('roomList', {
                        rooms: getAllActiveRooms()
                    })
                }

                console.log(`User ${socket.id} disconnected`)
            })

        // upon connection - only to user that connected
            socket.emit("message", buildMsg(ADMIN, "Welcome To Chat App!"));

        // upon connection to everyone but the person that connected
            socket.broadcast.emit("message", `User ${socket.id.substring(0,5)} connected`)

        // Listen for a message event
            socket.on("message", ({name, text}) => {
                const room = getUser(socket.id)?.room
                if (room){
                    io.to(room).emit('message', buildMsg(name, text))
                }
            })

        // listen for activity
            socket.on("activity", (name)=>{
                const room = getUser(socket.id)?.room
                if(room){
                    socket.broadcast.to(room).emit('activity', name)
                }
            })
    })

    function buildMsg(name, text){
        return {
            name,
            text,
            time: "Not Right Now"
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
            UserState.setUsers(
                UserState.users.filter(user => user.id !== id)
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