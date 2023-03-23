const express = require('express');
const Animal = require('../models/animalshelter');

const router = express.Router();

//Threepat- show info that got from MondoDB
router.get('/info', async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

//Threepat- create post request to send info to MongoDB
router.post('/info', async (req, res) => {
  const {
    userName,
    password,
    animalShelterName,
    location,
    phoneNumber,
    email,
  } = req.body;

  try {
    const animal = new Animal({
      userName,
      password,
      animalShelterName,
      location,
      phoneNumber,
      //threepat - Add email to AnimalShelter
      email,
    });
    await animal.save();
    res.json(animal);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
