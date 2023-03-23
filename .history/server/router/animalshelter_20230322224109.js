const express = require("express");
const Animal = require("../models/animalshelter");
const bcrypt = require("bcryptjs");
const router = express.Router();

//Threepat- show info that got from MondoDB
router.get("/info", async (req, res) => {
   try {
     const animals = await Animal.find();
     res.json(animals);
     } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
     }});

//Threepat- create post request to send info to MongoDB
router.post("/info", async (req, res) => {
   const {
    password,
    animalShelterName,
    location,
    phoneNumber,
    email,
  } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const animal = new Animal({
      //threepat - Add email to AnimalShelter
      email,
      password: hashedPassword,
      animalShelterName,
      location,
      phoneNumber,
     });
     await animal.save();
     res.json(animal);
     } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }});

    module.exports = router;