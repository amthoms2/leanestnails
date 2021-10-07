/* eslint-disable no-unused-vars */
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const User = require("../models/User");
//MAKE SPECIFIC ERROR HANDLING FOR USERS!!

router.post("/signup", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
