import mongoose from "mongoose";

const reclamationSchema = mongoose.Schema({
  reference: {
    type: String,
    required: true,
  },
  region: {
    type: String,

    unique: true,
  },
  typeClient: {
    type: String,

    unique: true,
  },
  etablissement: {
    type: String,

    unique: true,
  },
});

const Reclamation = mongoose.model("Reclamation", reclamationSchema);

export default Reclamation;
