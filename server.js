const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 8080;

const app = express();

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost/Workout",
  {
  useNewUrlParser: true,
  useFindAndModify: false
  });

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected")
})



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(logger("dev"));
// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});