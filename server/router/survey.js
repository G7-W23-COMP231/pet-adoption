const express = require("express");
const Survey = require("../models/survey");
const router = express.Router();
const passport = require("passport");

router.post(
  "/ownersurvey",
  passport.authenticate("petownerjwtStrategy", { session: false }),
  async (req, res) => {
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
        ownerId: req.user._id,
      });

      await survey.save();
      res.json(survey);
      console.log(survey);
    } catch (error) {
      console.error(error);
    }
  }
);

module.exports = router;
