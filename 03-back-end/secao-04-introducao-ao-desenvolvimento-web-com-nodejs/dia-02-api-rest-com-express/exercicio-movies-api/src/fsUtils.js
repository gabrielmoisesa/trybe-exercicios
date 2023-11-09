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

module.exports = { readMovies };