const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

var errorHandler = require("errorhandler");

//La bdd se nomme IMMO / immo ( mongo ne fait pas la diff)
mongoose.connect("mongodb://localhost:27017/IMMO");

const app = express();

const { createAnnonceRoutes } = require("./routes");

app.use(cors());
app.use(errorHandler({ dumpExceptions: true, showStack: true }));
app.use(bodyParser.json());

createAnnonceRoutes(app);

// lancement du serveur
app.listen(3000, "localhost", () => {
    console.log("Le serveur s'est lancer sans problème ! Vérifier que les dependancies(modules) sont bien installer et c'est partit !!!");
});
  