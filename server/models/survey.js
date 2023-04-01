const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
  {
    ageBracket: Number,
    existingPetOwner: Number,
    okWithOtherPet: Number,
    petGoodWith: Number,
    indoorOutdoor: Number,
    hoursOutside: Number,
    petArea: Number,
    servicePet: Number,
    enthusiasticPet: Number,
    playfulPet: Number,
    laidBackPet: Number,
    willingToTrainPet: Number,
    specialNeeds: Number,
    ownerId: Number,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "owner" },
  },
  {
    collection: "petownersurvey",
    timmestamps: true,
  }
);

module.exports = mongoose.model("petownersurvey", surveySchema);
