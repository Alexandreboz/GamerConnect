const express = require("express");
const router = express.Router();
const groupeController = require("../controllers/groupe.controller");

router.get("/", groupeController.getAllGroups);
router.get("/:id/messages", groupeController.getGroupMessages);

module.exports = router;