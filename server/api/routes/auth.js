/* eslint-disable no-unused-vars */
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
//MAKE SPECIFIC ERROR HANDLING FOR USERS!!

//SIGN UP POST ROUTE
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

//LOGIN POST ROUTE
router.post("/login", async (req, res) => {
  try{
    const user = await User.findOne({ username: req.body.username });

    if(!user) return res.status(401).json("You entered in the wrong credentials")

    const decryptPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC)

    const originalPassword = decryptPassword.toString(CryptoJS.enc.Utf8);

      if(originalPassword !== req.body.password) return res.status(401).json("You entered in the wrong credentials");

      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        {expiresIn:"2d"}
      );

    const { password, ...others } = user._doc;
    //use the spread operator to only res.json everything in the object EXCEPT the password. Added ._doc because the obj returned without had more key value pairs

      res.status(200).json({...others, accessToken})

  } catch(err){
    res.status(500).json(err)
  }

})

module.exports = router;
