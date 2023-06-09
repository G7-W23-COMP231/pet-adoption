var createError = require('http-errors');
var express = require('express');
var path = require('path');
const animalShelterRouter = require('../router/animalshelter');

var app = express();

// database setup
let mongoose = require('mongoose');
let DB = require('./db');

//show mongoose the Atlas URI in db, 
mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

//messages to show on connection or error
let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', () => {
    console.log('Connected to MongoDB...');
});

const PORT = process.env.PORT || 5000;

// allow to access the request body using req.body in routes.
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Threepat Kiatkamol - Create pets.js file to control the request
app.use('/animalshelter', animalShelterRouter);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  app.get('/', (req, res) => {
    res.send('Welcome to my homepage!');
  });

module.exports = app;