const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  //   console.log("rows", rows);
  return rows;
}

async function insertUsernames(username) {
  //   console.log("from queries:", username);
  await pool.query("INSERT INTO usernames(username) VALUES ($1)", [username]);
}

async function deleteAllData() {
  await pool.query("DELETE FROM usernames");
}

module.exports = {
  getAllUsernames,
  insertUsernames,
  deleteAllData,
};
