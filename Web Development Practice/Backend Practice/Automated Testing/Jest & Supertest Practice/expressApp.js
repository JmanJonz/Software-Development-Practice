import express from "express";

// create express app object
    const app = express();

// create a route that we will test with jest and supertest
    app.get("/user", (req, res)=>{
        res.status(200).send("good");
    });

// export our app so we can start it running on different ports 1 for production and one for testing
    export default app;