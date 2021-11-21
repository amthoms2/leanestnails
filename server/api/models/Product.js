const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: String },
    shape: { type: String },
    color: { type: String },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true, required: true },
    quantity: {
      type: Number,
      default: 1,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
