const express = require("express");
const Survey = require("../models/survey");
const router = express.Router();

router.post("/ownersurvey", async (req, res) => {
  try {
    const {
      ageBracket,
      existingPetOwner,
      okWithOtherPet,
      petGoodWith,
      indoorOutdoor,
      hoursOutside,
      petArea,
      servicePet,
      enthusiasticPet,
      playfulPet,
      laidBackPet,
      willingToTrainPet,
      specialNeeds,
      ownerId,
    } = req.body;

    const survey = new Survey({
      ageBracket,
      existingPetOwner,
      okWithOtherPet,
      petGoodWith,
      indoorOutdoor,
      hoursOutside,
      petArea,
      servicePet,
      enthusiasticPet,
      playfulPet,
      laidBackPet,
      willingToTrainPet,
      specialNeeds,
      ownerId,
    });

    await survey.save();
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
