const User = require("../models/user.model");

exports.getUsers = (req, res) => {
  User.getAllUsers((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getUserById = (req, res) => {
  User.getUserById(req.params.id, (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(404).json({ message: "User not found" });
    res.json(results[0]);
  });
};