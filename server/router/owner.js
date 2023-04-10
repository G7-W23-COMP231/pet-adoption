const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const configurePassport = require("../config/passport");
const Owner = require("../models/owner");

const JWT_SECRET = "your-secret-key";

// Configure Passport
configurePassport(passport);

router.get("/info", async (req, res) => {
  try {
    const owner = await Owner.find();
    res.json(owner);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Register a new pet owner
router.post("/addowner", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      city,
      country,
      province,
      street,
      age,
      existingPetOwner,
      favorites,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if user already exists
    const existingUser = await Owner.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this email already exists" });
    }

    // Create new pet owner object
    const user = new Owner({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
      country,
      city,
      province,
      street,
      age,
      existingPetOwner,
      favorites,
      type: "Pet Owner",
    });

    // Save the new user object to the database
    await user.save();
    const token = jwt.sign({ sub: user._id }, JWT_SECRET);
    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Login existing user
router.post("/userlogin", async (req, res, next) => {
  passport.authenticate("petownerlocal", async (err, user) => {
    try {
      if (err || !user) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const token = jwt.sign({ sub: user._id }, JWT_SECRET);
        console.log(token);
        //res.cookie("jwt", token, { httpOnly: true, secure: true });
        res
          .set("Authorization", `Bearer ${token}`)
          .json({ message: "Login successful", token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

// Get user profile
router.get(
  "/profile",
  passport.authenticate("petownerjwtStrategy", { session: false }),
  (req, res) => {
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
