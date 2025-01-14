const express = require("express");
const dotenv = require("dotenv").config();

const port = 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Unsplash API!" });
});

app.use("/api/photos", require('./routes/photoRoutes'));

app.listen(port, () => console.log(`server started on port ${port}`));
