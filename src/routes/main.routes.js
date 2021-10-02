const express = require("express");
const router = express.Router();

const Movie = require("../models/movie");

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find({})
    res.json({error: false, movies})
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await Movie.findById(id)
    res.json({error: false, movie})
  } catch (error) {   
    res.json({ error: true, message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const movie = req.body;
    const response = await new Movie(movie).save();
    res.json({ erro: false, movie: response });
  } catch (error) {
    res.json({ erro: true, message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newMovie = req.body
    const movie = await Movie.findByIdAndUpdate(id, newMovie)
    res.json({error: false, movie} )
  } catch (error) {
    res.json({error: true, message: error.message})
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Movie.findByIdAndDelete(id)
    res.json({error: false})
  } catch (error) {
    res.json({error: true, message: error.message});
  }
});

module.exports = router;
