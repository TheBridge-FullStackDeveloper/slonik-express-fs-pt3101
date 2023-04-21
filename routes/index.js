const express = require("express");

const router = express.Router();

const booksRoutes = require("./books");
const usersRoutes = require("./users");

router.use("/books", booksRoutes);
router.use("/users", usersRoutes);

module.exports = router;
