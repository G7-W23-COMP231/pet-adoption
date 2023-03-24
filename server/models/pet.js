//import mongoose from 'mongoose';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const petSchema = new Schema({
  // Define the properties of your petschema here
  petName : String,
  petCategory : Number,
  shelterID : String,
  age : Number,
  gwithFirstPetOwner : Number,
  canGetAlongWithOtherPets : Number,
  canGetWithHumanAge : String,
  indoorOutdoor : Number,
  petOusideHours : Number,
  petWithOwnerAllTime : Number,
  petStay : Number,
  serviceAnimal : Number,
  enthusiasticPet : Number,
  playfulPet : Number,
  laidbackPet : Number,
  trainablePet : Number,
  specialNeeds : Number,
  petPhoto : Buffer,
  medHistory : String,
  behaveIssue : String,
  vaccRecord : String,
  //file : Buffer,

},{
  collection: "pet",
  timestamps: true
}
);
module.exports = mongoose.model('pet', petSchema);



