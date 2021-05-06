const router = require("express").Router();
const db = require("../models");
// GET route - get the last workout from db
// fetch("/api/workouts");
router.get("/workouts", async (req, res) => {
  try {
    const lastWorkout = await db.Workout.find({});
    res.status(200).json(lastWorkout);
  } catch (error) {
    res.status(500);
  }
});

// GET route - get certain workouts within a certain range
// fetch(`/api/workouts/range`);
router.get("/workouts/range", async (req, res) => {
  try {
    // const lastWorkout = await db.Workout.find({});
    const lastWorkout = await await db.Workout.find({})
      .limit(7)
      .sort({ _id: -1 });
    const revereTheWorkOut = lastWorkout.reverse();
    res.status(200).json(revereTheWorkOut);
  } catch (error) {
    res.status(500);
  }
});

// PUT route - add an exercise to the db
// fetch("/api/workouts/" + id)

// POST route - create a new workout and add to db
// fetch("/api/workouts");

module.exports = router;
