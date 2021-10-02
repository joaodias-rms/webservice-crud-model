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

router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `atualizar somente o id: ${id}` });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ mensage: `deletar somente o id: ${id}` });
});

module.exports = router;
