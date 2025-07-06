const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", require("./routes/user.routes"));

// Démarrage du serveur
const db = require("./db");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API listening on port ${PORT}`));

module.exports = app;
