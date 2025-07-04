const db = require("../config/db");

exports.createUser = (req, res) => {
  const { nom, prenom, email, mot_de_passe, plateformes_liees } = req.body;

  if (!nom || !prenom || !email || !mot_de_passe) {
    return res.status(400).json({ error: "Champs requis manquants." });
  }

  const sql = `
    INSERT INTO Utilisateurs (nom, prenom, email, mot_de_passe, plateformes_liees)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [nom, prenom, email, mot_de_passe, plateformes_liees || null], (err, result) => {
    if (err) {
      console.error("Erreur lors de la création de l'utilisateur :", err);
      return res.status(500).json({ error: "Erreur serveur lors de la création." });
    }

    res.status(201).json({ message: "Utilisateur créé avec succès", userId: result.insertId });
  });
};

exports.getAllUsers = (req, res) => {
  db.query("SELECT * FROM Utilisateurs", (err, result) => {
    if (err) return res.status(500).json({ error: "Erreur serveur" });
    res.json(result);
  });
};

exports.getUserById = (req, res) => {
  db.query("SELECT * FROM Utilisateurs WHERE id_utilisateur = ?", [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: "Erreur serveur" });
    if (result.length === 0) return res.status(404).json({ error: "Utilisateur non trouvé" });
    res.json(result[0]);
  });
};

exports.updateUser = (req, res) => {
  const { nom, prenom, email, plateformes_liees } = req.body;
  db.query(
    "UPDATE Utilisateurs SET nom = ?, prenom = ?, email = ?, plateformes_liees = ? WHERE id_utilisateur = ?",
    [nom, prenom, email, plateformes_liees, req.params.id],
    (err) => {
      if (err) return res.status(500).json({ error: "Erreur serveur" });
      res.json({ message: "Utilisateur mis à jour" });
    }
  );
};

exports.deleteUser = (req, res) => {
  db.query("DELETE FROM Utilisateurs WHERE id_utilisateur = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: "Erreur serveur" });
    res.json({ message: "Utilisateur supprimé" });
  });
};
exports.createUser = (req, res) => {
  const newUser = req.body;
  User.createUser(newUser, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, ...newUser });
  });
};
exports.getAllUsers = (req, res) => {
  User.getAllUsers((err, users) => {
    if (err) return res.status(500).json(err);
    res.json(users);
  });
};