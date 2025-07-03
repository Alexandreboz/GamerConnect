const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Créer un utilisateur
router.post("/", userController.createUser);

// Autres routes utilisateur (à implémenter plus tard)
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.post("/", userController.createUser);


module.exports = router;
