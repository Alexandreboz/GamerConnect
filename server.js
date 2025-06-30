const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/user.routes"));
app.use("/api/events", require("./routes/evenement.routes"));
app.use("/api/badges", require("./routes/badge.routes"));
app.use("/api/resources", require("./routes/ressource.routes"));
app.use("/api/messages", require("./routes/message.routes"));
app.use("/api/groups", require("./routes/groupe.routes"));
app.use("/api/matchmaking", require("./routes/matchmaking.routes"));

app.get("/", (req, res) => {
  res.send("API GamerConnect OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API listening on port ${PORT}`));
// http://localhost:3000