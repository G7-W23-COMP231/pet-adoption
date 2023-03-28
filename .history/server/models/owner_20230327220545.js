//import mongoose from 'mongoose';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const animalSchema = new Schema({
  // Define the properties of your animalschema here
firstName : String,
lastName : String,
phoneNumber : Number,
email : String,
country : String,
province : String,
city : String,
street : String,
age : Number,
existingPetOwner : Number,
favorites : Array,
},{
  
  collection: "owner",
  timestamps: true
}
);
module.exports = mongoose.model('Owner', ownerSchema);

