const express = require("express");
const dotenv = require ('dotenv/config');



const port = process.env.PORT;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  
  res.status(200).json({message: "Welcome to the Unsplash API!"})
})

app.listen(port, ()=> console.log(`server started on port ${port}`))