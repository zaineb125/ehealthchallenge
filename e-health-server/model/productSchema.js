import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  reference: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
