import express from "express";

const router = express.Router();

import {
  getProducts,
  getProductByReference,
  addProduct,
} from "../controllers/productController.js";

router.route("/allproducts").get(getProducts);
router.route("/addproducts").post(addProduct);
router.route("/:ref/products").get(getProductByReference);

export default router;
