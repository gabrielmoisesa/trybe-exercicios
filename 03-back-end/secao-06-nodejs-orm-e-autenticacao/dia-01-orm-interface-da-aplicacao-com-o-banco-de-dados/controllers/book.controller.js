const BookService = require('../services/book.service')

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
};