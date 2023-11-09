const express = require("express");
const { readMovies, writeMovies, updateMovie } = require("./fsUtils");

const app = express();
app.use(express.json());

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

app.post("/movies", async (req, res) => {
  try {
    const movies = { ...req.body };
    await writeMovies(movies);
    res.status(201).json({ newMovies: movies });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await updateMovie(id, req.body);
    res.status(200).json({ message: "Movie updated successfully", newMovie: req.body });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = app;
