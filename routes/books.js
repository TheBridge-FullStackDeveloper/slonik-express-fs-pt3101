const express = require("express");

const router = express.Router();

const booksControllers = require("../controllers/books");

router.get("/", booksControllers.getAllBooks);

router.get("/:id", booksControllers.getBookById);

router.post("/", booksControllers.createBook);

router.put("/:id", booksControllers.updateBook);

router.delete("/:id", booksControllers.deleteBookById);

module.exports = router;
