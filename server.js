
const express = require("express");

const logger = require("morgan");

const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

// call express server
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));


// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });
mongoose.connect(
process.env.MONGODB_URI || 'mongodb://localhost/fierce-bayou-97965',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

// Call Express Routes
app.use(require("./routes/api-routes.js"));

app.use(require("./routes/htmlRoutes.js"));


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});