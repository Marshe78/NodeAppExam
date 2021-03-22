const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Création d'un modele d'annonce, ici on définit les différentes caractéristiques avec leur type.
const AnnonceSchema = new Schema({
  titre: {
    type: String,
  },
  description: {
    type: String,
  },
  adresse: {
    type: String,
  },
  code_postal: {
    type: Number,
  },
  ville: {
    type: String,
  },
  prix: {
    type: Number,
  },
});

const Annonce = mongoose.model("ANNONCE", AnnonceSchema);

module.exports = Annonce;
