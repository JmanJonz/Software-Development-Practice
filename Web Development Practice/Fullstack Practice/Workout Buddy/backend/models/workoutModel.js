// imports
    import mongoose from "mongoose";

// creating an instance of the Schema class which is apart of mongoose
    const workoutSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        reps: {
            type: Number,
            required: true
        },
        load: {
            type: Number,
            requied: true
        }
    }, {timestamps: true})

// export model so that it can be used elsewhere
    export default mongoose.model("workout", workoutSchema);
