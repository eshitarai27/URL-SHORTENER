const express = require("express");
const mongoose = require("./db");
const routes = require("./routes");

const app = express();
app.use(express.json());

app.use("/api", routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
