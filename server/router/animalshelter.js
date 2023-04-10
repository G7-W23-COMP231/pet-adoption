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
    res.json(shelteruser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

//Threepat- create post request to send info to MongoDB
router.post("/register", async (req, res) => {
  try {
    const { password, animalShelterName, location, phoneNumber, email, pets } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    //check if user already exist
    const existingUser = await shelterUser.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "user already exist" });
    }

    //create new  user
    const shelteruser = new shelterUser({
      email,
      password: hashedPassword,
      animalShelterName,
      location,
      phoneNumber,
      pets,
      type: "Shelter User",
    });
    await shelteruser.save();
    const token = jwt.sign({ sub: shelteruser._id }, JWT_SECRET);
    console.log(token);
    return res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

router.post("/login", async (req, res, next) => {
  passport.authenticate("shelterlocal", async (err, user) => {
    try {
      if (err || !user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const token = jwt.sign({ sub: user._id }, JWT_SECRET);
        //console.log(token);
        //res.cookie("jwt", token, { httpOnly: true, secure: true });
        //return res.status(200).json({ token });
        res
          .set("Authorization", `Bearer ${token}`)
          .json({ message: "Login successful", token });

        //return res.status(200).json({ message: "Access Granted" });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

//get  profile
router.get(
  "/profile",
  passport.authenticate("shelterjwtStrategy", { session: false }),
  (req, res) => {
    res.set(
      "Authorization",
      `Bearer ${req.headers.authorization.split(" ")[1]}`
    );
    res.json(req.user);
  }
);

router.post("/logout", (req, res) => {
  //req.logout(); // if using sessions
  // or
  req.user = null; // if using tokens
  res.json({ message: "Successfully logged out." });
});

module.exports = router;
