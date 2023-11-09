const express = require("express");
const { readMovies } = require("./fsUtils");

const app = express();

app.get("/", (_req, res) => res.status(200).json({ message: "ok" }));

app.get("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readMovies();
    const movie = movies.find((movie) => movie.id === Number(id));
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/movies", async (_req, res) => {
  try {
    const movies = await readMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = app;
