const db = require("./db");

const getAllGroups = (callback) => {
  db.query("SELECT * FROM Groupes", callback);
};

const getGroupMessages = (groupId, callback) => {
  db.query(
    "SELECT * FROM Messages_Groupes WHERE id_groupe = ? ORDER BY date_envoi",
    [groupId],
    callback
  );
};

module.exports = { getAllGroups, getGroupMessages };