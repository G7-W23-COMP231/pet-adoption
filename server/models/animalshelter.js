//import mongoose from 'mongoose';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const animalSchema = new Schema({
  // Define the properties of your animalschema here
  userName: String,
  password: String,
  animalShelterName: String,
  location: String,
  phoneNumber: Number,
  //Threepat - Add email from data
  email: String,
},{
  //Threepat- for update condition
  collection: "animalshelter",
  timestamps: true
}
);
module.exports = mongoose.model('animalshelter', animalSchema);

