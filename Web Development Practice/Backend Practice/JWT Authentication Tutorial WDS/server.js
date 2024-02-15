import express from "express";
const app = express();

app.listen(3000, ()=>{
    console.log("Server Listening On Port 3000")
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

app.get("/posts", (req, res)=>{
    console.log("post route ran")
    res.json(posts);
})