const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 8080;

const app = express();

// mongoose.connect("mongodb://localhost/Workout",
//   {
//   useNewUrlParser: true,
//   useFindAndModify: false
//   });

// mongoose.connection.on("connected", () => {
//   console.log("Mongoose connected")
// })
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Parker:manningsigns1@cluster0.b3ah4.mongodb.net/fitness?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

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