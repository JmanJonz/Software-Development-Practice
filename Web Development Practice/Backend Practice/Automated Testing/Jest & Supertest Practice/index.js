import app from "./expressApp.js";

// make app start serving on port 3000
    app.listen(3000, ()=>{
        console.log("App is serving on port 3000");
    })