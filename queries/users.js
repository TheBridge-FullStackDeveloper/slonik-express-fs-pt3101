const { sql } = require("slonik");

const db = require("../configs/db");

const selectAllUsers = async () => {
  const connection = await db;

  return connection.query(sql.unsafe`
    SELECT * FROM users
  `);
};

module.exports = {
  selectAllUsers,
};
