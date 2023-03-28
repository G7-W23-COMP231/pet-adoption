const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cors = require("cors");
const ownerRouter = require("../router/owner");
const animalShelterRouter = require("../router/animalshelter");
const petRouter = require("../router/pets");
const passportConfig = require("./passport");
const passportConfigowner = require("./passportowner");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

const uploadController = require("../controllers/upload");

// database setup
let mongoose = require("mongoose");
let DB = require("./db");

//show mongoose the Atlas URI in db,
mongoose.connect(DB.URI, { useNewUrlParser: true, useUnifiedTopology: true });

//messages to show on connection or error
let mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection Error:"));
mongoDB.once("open", () => {
  console.log("Connected to MongoDB...");
});

const PORT = process.env.PORT || 5000;

//authentication
app.use(cors());

// allow to access the request body using req.body in routes.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

//initialize passportjs
passportConfig(passport);
passportConfigowner(passport);
app.use(passport.initialize());

//model routes
app.use("/owner", ownerRouter);
app.use("/animalshelter", animalShelterRouter);
app.use("/pets", petRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to my homepage!");
});

module.exports = app;