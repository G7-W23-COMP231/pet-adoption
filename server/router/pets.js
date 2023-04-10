const express = require("express");
const Pet = require("../models/pet");
const router = express.Router();
const uploadController = require("../controllers/upload");
const uploadImage = require("../middleware/uploadImage.js");
const passport = require("passport");

router.post(
  "/addpet",
  passport.authenticate("shelterjwtStrategy", { session: false }),
  async (req, res) => {
    const {
      petId,
      petName,
      petCategory,
      shelterId,
      age,
      gwithFirstPetOwner,
      canGetAlongWithOtherPets,
      canGetWithHumanAge,
      indoorOutdoor,
      petOutsideHours,
      petWithOwnerAllTime,
      petStay,
      serviceAnimal,
      enthusiasticPet,
      playfulPet,
      laidbackPet,
      trainablePet,
      specialNeeds,
      petPhoto,
      medHistory,
      behaveIssue,
      vaccRecord,
    } = req.body;

    try {
      const petPhotoUrl = await uploadImage(petPhoto); // upload the pet's photo and get the URL
      //console.log(petPhotoUrl);
      const pet = new Pet({
        petId,
        petName,
        petCategory,
        shelterId: req.user._id,
        age,
        gwithFirstPetOwner,
        canGetAlongWithOtherPets,
        canGetWithHumanAge,
        indoorOutdoor,
        petOutsideHours,
        petWithOwnerAllTime,
        petStay,
        serviceAnimal,
        enthusiasticPet,
        playfulPet,
        laidbackPet,
        trainablePet,
        specialNeeds,
        petPhoto: petPhotoUrl,
        medHistory,
        behaveIssue,
        vaccRecord,
      });

      await pet.save();
      res.json(pet);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  }
);

//fetch pets for animalshelter entrance
router.get(
  "/showpets",
  passport.authenticate("shelterjwtStrategy", { session: false }),
  async (req, res) => {
    try {
      const data = await Pet.find({ shelterId: req.user._id }); //add { shelterId: req.user._id } inside find to query based on shelterId
      res.set(
        "Authorization",
        `Bearer ${req.headers.authorization.split(" ")[1]}`
      );
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

// Get all pets for pet owner entrance
router.get("/pets", async (req, res) => {
  try {
    const pets = await Pet.find().populate(
      "animalShelter",
      "animalShelterName"
    );
    res.json(pets);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.post("/uploadImage", (req, res) => {
  uploadImage(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
