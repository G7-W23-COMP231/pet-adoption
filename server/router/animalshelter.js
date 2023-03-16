const express = require('express');
const Animal = require('../models/animalshelter');

const router = express.Router();

router.get('/info', async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.post('/info', async (req, res) => {

  const { userName, password, animalShelterName, location, phoneNumber } = req.body;


  try {
    const animal = new Animal({ 
        userName, 
        password, 
        animalShelterName, 
        location, 
        phoneNumber, 
         });
   
    await animal.save();
    res.json(animal);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;