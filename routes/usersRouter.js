const { Router } = require("express");
const usersRouter = Router();
const userController = require("../controllers/userController");

usersRouter.get("/", userController.userListGet);
usersRouter.get("/new", userController.userCreateGet);
usersRouter.post("/new", userController.userCreatePost);
usersRouter.post("/delete", userController.userDeletePost);

module.exports = usersRouter;
