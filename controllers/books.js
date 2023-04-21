const { sql } = require("slonik");

const db = require("../configs/db");

const { v4 } = require("uuid");

const booksQueries = require("../queries/books");

const getAllBooks = async (req, res) => {
  try {
    const result = await booksQueries.selectAllBooks();

    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const getBookById = async (req, res) => {
  try {
    const result = await booksQueries.selectAllBooks(req.params);

    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const createBook = async (req, res) => {
  try {
    const result = await booksQueries.createBook(req.body);

    res.status(200).json({
      status: "ok",
      message: "book inserted",
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const updateBook = async (req, res) => {
  try {
    const result = await booksQueries.updateBookById({
      ...req.params,
      ...req.body,
    });

    res.status(200).json({
      status: "ok",
      message: "Book has been updated",
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

const deleteBookById = async (req, res) => {
  try {
    const result = await booksQueries.deleteBook(req.params);

    res.status(200).json({
      status: "ok",
      message: "Book deleted",
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBookById,
};
