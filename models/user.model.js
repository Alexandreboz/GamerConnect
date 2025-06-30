const db = require("./db");

const getAllUsers = (callback) => {
  db.query("SELECT * FROM Utilisateurs", callback);
};

const getUserById = (id, callback) => {
  db.query("SELECT * FROM Utilisateurs WHERE id_utilisateur = ?", [id], callback);
};

module.exports = {
  getAllUsers,
  getUserById,
};