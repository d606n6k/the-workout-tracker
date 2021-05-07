const mongoose = require("mongoose");

const { Schema } = mongoose;

const workoutSchema = new Schema({
  // name, type, weight, sets, reps, and duration of exercise
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter a name for workout",
      },
      type: {
        type: String,
        trim: true,
        required: true,
      },
      duration: {
        type: Number,
        require: true,
      },
      distance: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
