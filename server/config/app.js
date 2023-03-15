var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');




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

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true})); // default false, updated by STANLEY
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));
//setup express session



//create a user model instance for the passport user configuration
let userModel = require('../models/animalshelter');
let User = userModel.User;


module.exports = app;
