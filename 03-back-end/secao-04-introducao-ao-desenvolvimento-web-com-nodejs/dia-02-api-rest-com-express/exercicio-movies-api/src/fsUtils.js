const fs = require('fs').promises;
const path = require('path');

const moviesPath = path.resolve(__dirname, './movies.json');

const readMovies = async () => {
  try {
    const movies = await fs.readFile(moviesPath);
    return JSON.parse(movies);
  } catch (error) {
    console.log(`The file couldn't be read. Error: ${error.message}`);
  }
};

const writeMovies = async (movies) => {
  try {
    const oldMovies = await readMovies();
    let newId = oldMovies.length + 1;

    for (let movie of oldMovies) {
      if (movie.id === newId) newId++;
    }

    const addedMovies = { ...movies, id: newId };
    
    const newMovies = [...oldMovies, addedMovies];

    await fs.writeFile(moviesPath, JSON.stringify(newMovies));
  } catch (error) {
    console.log(`The file couldn't be written. Error: ${error.message}`);
  }
};

const updateMovie = async (id, movie) => {
  try {
    const movies = await readMovies();
    const updateMovie = movies.find((movie) => movie.id === Number(id));

    if (!updateMovie) return res.status(404).json({ message: "Movie not found" });

    updateMovie.movie = movie.movie;
    updateMovie.price = movie.price;

    await fs.writeFile(moviesPath, JSON.stringify(movies));
  } catch (error) {
    console.log(`The file couldn't be written. Error: ${error.message}`);
  }
}

module.exports = { readMovies, writeMovies, updateMovie };