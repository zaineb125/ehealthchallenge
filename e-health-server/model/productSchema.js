import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  reference: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  classe: {
    type: String,
  },
  score: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
