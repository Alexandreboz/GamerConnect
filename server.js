const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/user.routes"));

app.post('/users', (req, res) => {
  // ...création de l'utilisateur...
  res.status(201).json({ message: 'Utilisateur créé' });
});
app.get("/", (req, res) => {
  res.send("API GamerConnect OK");
});
// Démarrage du serveur
const db = require("./config/db");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API listening on port ${PORT}`));

module.exports = app;
