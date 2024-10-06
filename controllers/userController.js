const db = require("../db/queries");

// exports.getUsernames = async (req, res) => {
//   const usernames = await db.getAllUsernames();
//   console.log("usernames:", usernames);
//   res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
// };

exports.userListGet = async (req, res) => {
  const usernames = await db.getAllUsernames();
  //   console.log("usernames:", usernames);
  res.render("index", {
    title: "User Dashboard",
    usernames: usernames,
  });
};
exports.userDeletePost = async (req, res) => {
  await db.deleteAllData();
  res.redirect("/");
};
exports.userCreateGet = (req, res) => {
  res.render("new", {
    title: "Create New User",
  });
};

exports.userCreatePost = async (req, res) => {
  const { username } = req.body;
  //   console.log(username);
  await db.insertUsernames(username);
  console.log("username to be saved: ", username);
  res.redirect("/");
};
