import mongoose from 'mongoose';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const animalSchema = new Schema({
  // Define the properties of your animalschema here
  username: String,
  password : String,
  animalshletername: String,
  location: String,
  phonenumber: Number,
});
const User = mongoose.model('User', animalSchema);