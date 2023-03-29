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

// Register a new user
router.post("/userregister", async (req, res) => {
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

    // Create new user object
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
        res.cookie("jwt", token, { httpOnly: true, secure: true });

        //return res.redirect("/");
        return res.status(200).json({ message: "Success" });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

// Get user profile
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
