const { createPool } = require("slonik");

const DB_URL = "postgres://user1:1234@localhost:5432/prueba";

const db = createPool(DB_URL);

module.exports = db;
