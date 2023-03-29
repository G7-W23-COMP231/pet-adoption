const express = require("express");
const shelterUser = require("../models/animalshelter");
const bcrypt = require("bcryptjs");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");

const configurePassport = require("../config/passport");

const JWT_SECRET = "your-secret-key";
// Configure Passport
configurePassport(passport);

//Threepat- show info that got from MondoDB
router.get("/info", async (req, res) => {
  try {
    const shelteruser = await shelterUser.find();
    res.json(animals);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

//Threepat- create post request to send info to MongoDB
router.post("/register", async (req, res) => {
  try {
    const { password, animalShelterName, location, phoneNumber, email } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    //check if user already exist
    const existingUser = await shelterUser.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "user already exist" });
    }

    //create new shelter user
    const shelteruser = new shelterUser({
      email,
      password: hashedPassword,
      animalShelterName,
      location,
      phoneNumber,
    });
    await shelteruser.save();
    const token = jwt.sign({ sub: shelteruser._id }, JWT_SECRET);
    console.log(JWT_SECRET);
    return res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.post("/login", async (req, res, next) => {
  passport.authenticate("local", async (err, user) => {
    try {
      if (err || !user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const token = jwt.sign({ sub: user._id }, JWT_SECRET);
        res.cookie("jwt", token, { httpOnly: true, secure: true });

        //return res.redirect("/");
        return res.status(200).json({ message: "Success" });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);

  //app.get(
  router.get(  
    "/profile",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      res.json(req.user);
    }
  );
});

module.exports = router;