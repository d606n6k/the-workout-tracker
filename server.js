const express = require("express");
const mongoose = require("mongoose");
const appRouter = require("./controllers");

const PORT = process.env.PORT || 3000;

const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(appRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
