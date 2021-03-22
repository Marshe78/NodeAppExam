// obligé d'indiquer la route car pas d'index.js
const {
    getAnnonces,
    getAnnonceByID,
    createAnnonce,
    updateAnnonceByID,
    deleteAnnonceByID,
  } = require("../controllers/annonce");
  
  const createAnnonceRoutes = (app) => {

    // Je récupère toutes les annonces
    app.get("/annonces", getAnnonces);
  
    // Une annonce en fonction de l'id créer par mongo
    app.get("/annonce/:id", getAnnonceByID);
  
    // Un post pour créer une annonce
    app.post("/annonce", createAnnonce);
  
    // L'update d'une annonce
    app.put("/annonce/:id", updateAnnonceByID);
  
    // Suppression d'une annonce
    app.delete("/annonce/:id", deleteAnnonceByID);
  };
  
  module.exports = { createAnnonceRoutes };
  