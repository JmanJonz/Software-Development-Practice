// code imports
    // npm modules
        import express from "express";
        import dotenv from "dotenv";
        import mongoose from "mongoose";
    // routers to use
        import workoutRouter from "./routers/workoutRouter.js";

// set up the dotenv module
    dotenv.config();

// make express app.
    const app = express();

// connect to mongodb atlas database then start server
    (async ()=>{
        try{
            // connect to mongodb using await
                await mongoose.connect(process.env.MONGO_URI)
            // server listening on localhost port 3000
                app.listen(process.env.PORT || 3000, () => {
                console.log("Connected to DB Server listening at Localhost on port 3000.");
                });
        } catch (error){
            console.error("Error connecting to MongoDB:", error);
        }
    })();

// middleware (inbetween request and response)
    // creating a copy / gaining access to the request body
        app.use(express.json())
        console.log

    // loging requests before response 
        app.use((req, res, next)=>{ 
            console.log(req.path, req.method); 
            // Run next method but in this case not moving on to any more middleware... 
                next(); 
        });

// connect Imported Routes To This Live Server:
    app.use("/api/workouts", workoutRouter);


