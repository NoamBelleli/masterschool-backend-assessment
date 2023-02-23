const express = require("express");
const photoRouter = express.Router();
const axios = require("axios");


const API = "https://api.unsplash.com/photos/";

photoRouter.route("/").get(async (req, res) => {
  try {
    const response = await axios.get(
      `${API}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );
    const photos = response.data;
    res.status(200).send(photos);
  } catch (error) {
    res.status(500).json({
      message: "Server error. Please try again later."
    });
    
  }
});