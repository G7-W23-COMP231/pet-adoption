const express = require('express');
const Pet = require('../models/pet');
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");

router.post('/addpet', async (req, res) => {
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
    //file,
  } = req.body;

  try {
    const pet = new Pet({
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
      //file,
    });
    await pet.save();
    res.json(pet);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
