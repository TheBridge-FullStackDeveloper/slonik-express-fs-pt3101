const { sql } = require("slonik");

const db = require("../configs/db");

const usersQueries = require("../queries/users");

const getAllUsers = async (req, res) => {
  try {
    const result = await usersQueries.selectAllUsers();

    res.status(200).json({
      status: "ok",
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = {
  getAllUsers,
};
