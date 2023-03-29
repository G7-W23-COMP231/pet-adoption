const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

const JWT_SECRET = "your-secret-key";

const Owner = require("../models/owner");

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

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
      password: await bcrypt.hash(password, 10),
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
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    const token = jwt.sign({ sub: req.user._id }, JWT_SECRET);
    res.json({ token });
  }
);

// Get user profile
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
