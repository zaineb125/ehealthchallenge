import asyncHandler from "express-async-handler";
import Product from "../model/productSchema.js";

const getProducts = asyncHandler(async (req, res) => {
  const product = await Product.find();

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const addProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    reference: req.body.reference,
    description: req.body.description,
  });

  const createdproduct = await product.save();

  res.status(201).json(createdproduct);
});

const getProductByReference = asyncHandler(async (req, res) => {
  const product = await Product.find({ reference: req.params.ref });

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductByReference, addProduct };
