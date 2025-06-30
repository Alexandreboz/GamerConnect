const Groupe = require("../models/groupe.model");

exports.getAllGroups = (req, res) => {
  Groupe.getAllGroups((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getGroupMessages = (req, res) => {
  Groupe.getGroupMessages(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};