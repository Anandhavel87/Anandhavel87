const {
    createcategory, getCategoryById, getCoinCategorys, updateCategory, deleteCategory
} = require("../coincategorys/coincategory.controller");
const router = require("express").Router();
const { checktoken } = require("../auth/token_validation")
//router.post("/", checktoken, createuser);
router.post("/", createcategory);
//router.get("/", checktoken, getUsers);
router.get("/", getCoinCategorys);
//router.get("/:id", checktoken, getUserById);
router.get("/:id", getCategoryById);
//router.patch("/", checktoken, updateUser);
router.patch("/", updateCategory);
//router.delete("/", checktoken, deleteCategory);
router.delete("/", deleteCategory);


module.exports = router;