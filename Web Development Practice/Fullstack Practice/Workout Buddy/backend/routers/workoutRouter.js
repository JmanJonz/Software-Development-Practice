// imports
    // npm modules
        import express from "express";
    // controller functions
        import { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout} from "../controllers/workoutController.js";

// configurations
    const workoutRouter = express.Router();

// get all workouts
    workoutRouter.get("/", getWorkouts)

// get a single workout
    workoutRouter.get("/:id", getWorkout)

// post a new workout
    workoutRouter.post('/', createWorkout)

// delete a workout
    workoutRouter.delete('/:id', deleteWorkout) 

// update a workout
    workoutRouter.patch('/:id', updateWorkout)
// exports
    export default workoutRouter;