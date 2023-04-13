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
      petGender,
      petBreed,
      petCategory,
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
        petGender,
        petBreed,
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
        petPhoto,
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
    const data = await Pet.find(); //add { shelterId: req.user._id } inside find to query based on shelterId
    // res.set(
    //   "Authorization",
    //   `Bearer ${req.headers.authorization.split(" ")[1]}`
    // );
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//api to get pet based on pet id
router.get("/pet/:petid", async (req, res) => {
  try {
    const data = await Pet.findOne({ _id: req.params.petid }); //find a pet by its id
    if (!data) {
      //if pet not found, send a 404 response
      return res.status(404).json({ message: "Pet not found" });
    }
    // res.set(
    //   "Authorization",
    //   `Bearer ${req.headers.authorization.split(" ")[1]}`
    // );
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/uploadImage", (req, res) => {
  uploadImage(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});

//edit pet API
router.get("/editpet/:id", async (req, res) => {
  let id = req.params.id;
  //console.log("Get statement sending details on id:",id)
  try {
    const pet = await Pet.find({ _id: id }); //ObjectId(id) })
    if (pet) {
      //console.log(pet);
      res.json(pet);
    } else {
      res.json("no pet found by that id.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});
//update pet API
router.put("/editpet/:id", async (req, res) => {
  let id = req.params.id;
  try {
    const pet = await Pet.findOneAndUpdate(
      { _id: id }, // search for the pet with the given id
      req.body, // update the pet document with the properties in the request body
      { new: true } // return the updated document
    );
    if (pet) {
      console.log(pet);
      res.json(pet);
    } else {
      res.json("no pet found by that id.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
