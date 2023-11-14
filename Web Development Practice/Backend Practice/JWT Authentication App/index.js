// 3p imports
    import express from "express";
    import jwt from "jsonwebtoken";
    import dotenv from "dotenv";

// usually custom imports but this time funcitons just added here directly
    function authenticateToken(req, res, next){
        const authHeader = req.header['authorization'];
        const token = authHeader && authHeader.split('')[1];
        if (token == null) return res.sendStatus(401)

        jwt.verify(token, process.env.JWT_KEY, (err, user)=>{
            if(err) return res.sendStatus(403)
            req.user = user
            next();
        })
    }

// gain access to .env variables
    dotenv.config();

// create posts array to use in authentication test
    const posts = [
        {
            username: "JmanJonz",
            title: "Schredding"
        },
        {
            username: "YoYo",
            title: "Cool Tricks"
        }
    ]

// create express server and start it
    const server = express();
    server.listen(3000, ()=>{
        console.log("Serving at port 3000");
    })

// global middleware that runs at the start of any request

    // parse req.body from json to usable js object
        server.use(express.json());

// create account / login
    server.post("/create-or-login", (req, res)=>{
        // first you want to authenticate the user here

            // for now we just act like they are authenticated and we have their user id...
                const id = req.body.id;

            // right here I would grab the rest of the users data usually


        // create acess token for the authenticated user content must be object!
            const accessToken = jwt.sign({id}, process.env.JWT_KEY);
            res.json({accessToken: accessToken});
    })

// route to get posts
    server.get("/posts", authenticateToken, (req, res)=>{
        res.json(posts.filter((post)=> post.username === req.user.name));
    })
    