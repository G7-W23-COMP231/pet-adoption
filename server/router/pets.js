const express = require('express');
const Pet = require('../models/pet');
const router = express.Router();
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
    });
    await pet.save();
    res.json(pet);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.get('/showpets', async (req, res) => {
  try {
      const data = await Pet.find();
      res.json(data);
      console.log(data);
  }
  catch (error) {
      res.status(500).json({ message: error.message })
  }
})

module.exports = router;
