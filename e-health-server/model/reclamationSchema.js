import mongoose from "mongoose";

const reclamationSchema = mongoose.Schema({
  reference: {
    type: String,
  },
  region: {
    type: String,
  },
  typeClient: {
    type: String,
  },
  etablissement: {
    type: String,
  },
});

const Reclamation = mongoose.model("Reclamation", reclamationSchema);

export default Reclamation;
