/* eslint-disable no-unused-vars */
const router = require("express").Router();
const {
  verifyToken,
  verifyTokenandAuth,
  verifyTokenandAdmin,
} = require("./verifyToken");
const Cart = require("../models/Cart");

//CREATE CART (even guest)
router.post("/", verifyToken, async (req, res) => {
  const cart = new Cart(req.body);
  try {
    const savedCart = await cart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE CART
router.put("/:id", verifyTokenandAuth, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE CART
router.delete("/:id", verifyTokenandAuth, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart Emptied");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER CART
router.get("/find/:userId", verifyTokenandAuth, async (req, res) => {
  try {
    const cart = await Cart.findOne({userId: req.params.userId});
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //ADMIN GET ALL CARTS
router.get("/", verifyTokenandAdmin, async (req, res) => {

  try {
    const allCarts = await Cart.find();
    res.status(200).json(allCarts);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
