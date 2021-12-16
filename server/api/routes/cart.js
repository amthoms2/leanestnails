/* eslint-disable no-unused-vars */
const router = require("express").Router();
const {
  verifyToken,
  verifyTokenandAuth,
  verifyTokenandAdmin,
} = require("./verifyToken");
const Cart = require("../models/Cart");
const Product = require("../models/Product");

//CREATE CART (even guest)
router.post("/", verifyToken, async (req, res) => {

  const cart = new Cart({
    userId: req.user.id,
    products: [
      {
        productId: req.body._id,
        qty: req.body.qty,
      },
    ],
    // subTotal:
  });
  console.log("create new cart", cart);
  try {
    const savedCart = await cart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE CART
router.put("/", verifyToken, async (req, res) => {
  const productId = req.body.product._id;
  const qty = req.body.qty;
  const userId = req.user.id;
  const cart = await Cart.findOne({ userId: userId });
  const productDetails = await Product.findById(req.body._id);
  console.log(req.body.qty);
  // console.log(req.body.product.quantity)

  try {
    if (cart) {
      const indexFound = cart.products.findIndex(
        (p) => p.productId == productId
      );
      if (indexFound != -1) {
        cart.products[indexFound].qty = cart.products[indexFound].qty + qty;
        // cart.subTotal = cart.products
        //   .map((item) => item.total)
        //   .reduce((acc, curr) => acc + curr);

        cart.products.push({
          userId: userId,
          products: [
            {
              productId: productId,
              qty: qty,
            },
          ],
          subTotal: 0,
        });
      } else if (!indexFound) {
        cart.products.push({
          userId: userId,
          products: [
            ...products,
            {
              productId: productId,
              qty: qty,
            },
          ],
          subTotal: 0,
        });
      }
    } else {
      return res.status(400).json({
        code: 400,
        message: "Invalid request",
      });
    }
    //Cart.findByUserIdAndUpdate()
    // console.log("req: " + JSON.stringify(req.body));
    // console.log("Updated body: " + JSON.stringify(update));
    // const updatedCart = await Cart.findOneAndUpdate({
    //   filter,
    //   update
    // });
    // console.log("Updated cart: " + JSON.stringify(updatedCart));
    const savedCart = await cart.save();
    res.status(200).json(savedCart);
    console.log("saved cart", savedCart);
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
router.get("/find/:userId", verifyToken, async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
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

// const updatedCart = await Cart.findByIdAndUpdate(
//   req.params.id,
//   {
//     $set: req.body,
//   },
//   { new: true }
// );
// res.status(200).json(updatedCart);
// } catch (err) {
// res.status(500).json(err);
// }
