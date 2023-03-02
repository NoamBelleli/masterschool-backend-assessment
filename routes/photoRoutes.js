const express = require("express");
const photoRouter = express.Router();
const axios = require("axios");
require("dotenv").config();

const API = "https://api.unsplash.com/photos/";

photoRouter.route("/").get(async (req, res) => {
  try {
    const response = await axios.get(
      `${API}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );
    const photos = response.data;
    const photosRawUrls = photos.map((photo) => photo.urls.raw)
    res.status(200).send(photosRawUrls);
  } catch (error) {
    res.status(500).json({
      message: "Server error. Please try again later."
    });
    
  }
});

photoRouter.route("/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const response = await axios.get(
      `${API}/${id}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    );
    const photo = response.data;
    res.status(200).send(photo);
    
  } catch (error){     
      res.status(500).json({
        message: "Server error. Please try again later."
      })
    }
})

module.exports = photoRouter;