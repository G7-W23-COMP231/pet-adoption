const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
  {
    ageBracket: String,
    existingPetOwner: String,
    okWithOtherPet: String,
    petGoodWith: String,
    indoorOutdoor: String,
    hoursOutside: String,
    petArea: String,
    servicePet: String,
    enthusiasticPet: String,
    playfulPet: String,
    laidBackPet: String,
    willingToTrainPet: String,
    specialNeeds: String,
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "owner" },
  },
  {
    collection: "petownersurvey",
    timmestamps: true,
  }
);

module.exports = mongoose.model("petownersurvey", surveySchema);
