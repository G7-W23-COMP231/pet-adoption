//import mongoose from 'mongoose';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const animalSchema = new Schema({
  // Define the properties of your animalschema here
  userName: String,
<<<<<<< Updated upstream
  password : String,
  animalShleterName: String,
  location: String,
  phoneNumber: Number,
  petId: Number,
});
const User = mongoose.model('User', animalSchema);
=======
  password: String,
  animalShelterName: String,
  location: String,
  phoneNumber: Number,
},{
  //Threepat- for update condition
  collection: "animalshelter",
  timestamps: true
}
);
module.exports = mongoose.model('animalshelter', animalSchema);
>>>>>>> Stashed changes
