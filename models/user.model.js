const db = require("../db");

const getAllUsers = (callback) => {
  db.query("SELECT * FROM Utilisateurs", callback);
};

const getUserById = (id, callback) => {
  db.query("SELECT * FROM Utilisateurs WHERE id_utilisateur = ?", [id], callback);
};

const createUser = (user, callback) => {
  const query = "INSERT INTO Utilisateurs (nom, prenom, email, mot_de_passe, plateformes_liees) VALUES (?, ?, ?, ?, ?)";
  db.query(query, [user.nom, user.prenom, user.email, user.mot_de_passe, user.plateformes_liees], callback);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};