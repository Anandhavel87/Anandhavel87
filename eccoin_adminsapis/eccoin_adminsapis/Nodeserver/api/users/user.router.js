const {
    createuser, getUserById, getUsers, updateUser, deleteUser, login
} = require("../users/user.controller");
const router = require("express").Router();
const { checktoken } = require("../auth/token_validation")
//router.post("/", checktoken, createuser);
router.post("/", createuser);
//router.get("/", checktoken, getUsers);
router.get("/", getUsers);
//router.get("/:id", checktoken, getUserById);
router.get("/:id", getUserById);
//router.patch("/", checktoken, updateUser);
router.patch("/", updateUser);
router.delete("/", checktoken, deleteUser);
router.post("/login", login);

module.exports = router;