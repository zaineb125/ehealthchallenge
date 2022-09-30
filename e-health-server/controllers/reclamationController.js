import asyncHandler from "express-async-handler";
import Reclamation from "../model/reclamationSchema.js";

const getReclamationByReference = asyncHandler(async (req, res) => {
  const reclamation = await Reclamation.find({ reference: req.params.ref });

  if (reclamation) {
    res.json(reclamation);
  } else {
    res.status(404);
    throw new Error("Reclamation not found");
  }
});

const addReclamation = asyncHandler(async (req, res) => {
  const reclamation = new Reclamation({
    reference: req.body.reference,
    region: req.body.region,
    typeClient: req.body.typeClient,
    etablissement: req.body.etablissement,
  });

  const createdReclamation = await reclamation.save();

  res.status(201).json(createdReclamation);
});

export { addReclamation, getReclamationByReference };
