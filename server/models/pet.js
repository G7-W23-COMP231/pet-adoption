//import mongoose from 'mongoose';
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const petSchema = new Schema(
  {
    // Define the properties of your petschema here
    petName: String,
    petGender: String,
    petBreed: String,
    petCategory: String,
    shelterId: { type: mongoose.Schema.Types.ObjectId, ref: "animalshelter" },
    age: String,
    gwithFirstPetOwner: String,
    canGetAlongWithOtherPets: String,
    canGetWithHumanAge: String,
    indoorOutdoor: String,
    petOusideHours: String,
    petWithOwnerAllTime: String,
    petStay: String,
    serviceAnimal: String,
    enthusiasticPet: String,
    playfulPet: String,
    laidbackPet: String,
    trainablePet: String,
    specialNeeds: String,
    petPhoto: String,
    medHistory: String,
    behaveIssue: String,
    vaccRecord: String,
    //file : Buffer,
  },
  {
    collection: "pet",
    timestamps: true,
  }
);
module.exports = mongoose.model("pet", petSchema);
