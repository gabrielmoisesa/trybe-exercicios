const express = require("express");
const { readMovies } = require("./fsUtils");

const app = express();

app.get("/", (_req, res) => res.status(200).json({ message: "ok" }));

app.get("/movies/:id", async (req, res) => {
  const { id } = req.params;
  const movies = await readMovies();
  const movie = movies.find((movie) => movie.id === Number(id));
  if (!movie) return res.status(404).json({ message: "Movie not found" });
  res.status(200).json(movie);
});

module.exports = app;
