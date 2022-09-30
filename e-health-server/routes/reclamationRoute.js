import express from "express";

const router = express.Router();

import {
  getReclamationByReference,
  addReclamation,
} from "../controllers/reclamationController.js";

router.route("/addreclamation").post(addReclamation);
router.route("/:ref/reclamation").get(getReclamationByReference);

export default router;
