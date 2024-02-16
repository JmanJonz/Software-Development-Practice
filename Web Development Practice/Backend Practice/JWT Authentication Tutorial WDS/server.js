import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();
const {sign, verify} = jwt;
const app = express();
app.use(express.json());

app.listen(4321, ()=>{
    console.log("Server Listening On Port 4321")
})

const posts = [
    {
        username: "Kyle",
        title: "post 1"
    },
    {
        username: "Ammon",
        title: "post 2"
    }
]

app.get("/posts", authenticateToken, (req, res)=>{
                console.log("get posts route ran")
    res.json(posts.filter(post => post.username === req.user.name));
})

app.post("/login", (req, res)=>{
                            console.log("login route running");
    // where you normally first would authenticate user 
    // checking that user exists and password was right
    // before you create a jwt so you don't have to do that 
    // every time
    // you then give them a jwt with a secret only known by your 
    // server that is their proof that that they have been authenticated already
    // on your server and can access anything pertaining to their
    // account

    const username = req.body.username;
    const user = {"name": username};

    // jwt creation using library and our env secret
        const generatedJWT = sign(user, process.env.ACCESS_TOKEN_SECRET)
        res.json({accessToken: generatedJWT});
})

// creating some middleware 
    function authenticateToken(req, res, next){
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];
        if(token == null){
            return res.sendStatus(401);
        }
        verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
            if(err) return res.sendStatus(403);
            // if they get passed this we have the user info
            // and we can move on from this middleware 
            // and do anything that that user has access rights to
            req.user = user
            next();
        })
    }