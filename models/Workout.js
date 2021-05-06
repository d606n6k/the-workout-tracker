const mongoose = require("mongoose");

const { Schema } = mongoose;

const workoutSchema = new Schema({
  // name, type, weight, sets, reps, and duration of exercise
  day: {
    type: Date,
  },
  exercises: {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for workout",
    },
    type: {
      type: String,
      trim: true,
    },
    duration: {
      type: Number,
    },
    weight: {
      type: Number,
      required: "Enter a weight",
    },
    reps: {
      type: Number,
      required: "How many reps did you do?",
    },
    sets: {
      type: Number,
      required: "Enter how many sets completed",
    },
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
