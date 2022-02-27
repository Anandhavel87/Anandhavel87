const {
    createcoin, getcoinsByCategory, getCoins, updateCoin
} = require("../coins/coin.controller");
const router = require("express").Router();
const { checktoken } = require("../auth/token_validation")
//router.post("/", checktoken, createuser);
router.post("/", createcoin);
//router.get("/", checktoken, getUsers);
router.get("/", getCoins);
//router.get("/:id", checktoken, getUserById);
router.get("/:id", getcoinsByCategory);
//router.patch("/", checktoken, updateUser);
router.patch("/", updateCoin);




module.exports = router;