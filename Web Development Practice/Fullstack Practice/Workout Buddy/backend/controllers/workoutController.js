// imports
    // npm modules
        import mongoose from "mongoose";
    // my modules
            // model so the controller can interact with it and indirectly interact with the database
                import workoutModel from "../models/workoutModel.js";

// get all workouts
    const getWorkouts = async (req, res) => {
        const workouts = await workoutModel.find({}).sort({createdAt: -1});
        res.status(200).json(workouts);
    }

// get a single workout
    const getWorkout = async (req, res)=>{
        const {id} = req.params;
        // check if a valid mongoose id is passed in
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(404).json({error: "Enter a valid workout ID."});
            }
        const workout = await workoutModel.findById(id);
        if(!workout){
            return res.status(404).json({error: "No such workout"});
        }
        res.status(200).json(workout);
    }

// create a new workout
    const createWorkout = async (req, res)=>{
        const {title, load, reps} = req.body
        // add doc to db
            try{
                // console.log(req.body);
                console.log(title, load, reps)
                const workout = await workoutModel.create({title, load, reps})
                res.status(200).json({workout})
            } catch(error){
                res.status(400).json({error: error.message})
            }
    }

// delete a workout
    const deleteWorkout = async(req, res)=>{
        const {id} = req.params;
        // check if a valid mongoose id is passed in
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(404).json({error: "Enter a valid workout ID."});
            }
        const workout = await workoutModel.findOneAndDelete({_id: id});
        if(!workout){
            return res.status(404).json({error: "No such workout"});
        }
        res.status(200).json(workout);
    }

// update a workout
    const updateWorkout = async (req, res)=>{
        const {id} = req.params;
        // check if a valid mongoose id is passed in
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(404).json({error: "Enter a valid workout ID."});
            }
        const workout = await workoutModel.findOneAndUpdate({_id: id}, {...req.body})
        if(!workout){
            return res.status(404).json({error: "No such workout"});
        }
        res.status(200).json(workout)
    }

// exports
export {createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout};

