const { sql } = require("slonik");

const db = require("../configs/db");

const selectAllBooks = async () => {
  const connection = await db;

  return connection.query(sql.unsafe`
    SELECT id FROM books
  `);
};

const createBook = async ({ name, author, isbn }) => {
  const connection = await db;

  const result = connection.query(sql.unsafe`
    INSERT INTO books (
      id, name, author, isbn, rented_id
    ) VALUES (
      ${v4()}, ${name}, ${author}, ${isbn}, null
    ) ON CONFLICT DO NOTHING;
  `);
};

const deleteBook = async ({ id }) => {
  const connection = await db;

  const result = connection.query(
    sql.unsafe`
        DELETE FROM books WHERE id = ${id};
      `
  );

  return result;
};

const selectBookById = async () => {
  const connection = await db;

  return connection.query(
    sql.unsafe`SELECT * FROM books WHERE id = ${id}`
  );
};

const updateBookById = async ({ isbn, id }) => {
  const connection = await db;

  const result = connection.query(sql.unsafe`
    UPDATE books
    SET isbn = ${isbn}
    WHERE id = ${id}
  `);
};

module.exports = {
  selectAllBooks,
  createBook,
  deleteBook,
  selectBookById,
  updateBookById,
};
