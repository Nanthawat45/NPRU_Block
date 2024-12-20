const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller")

//http://localhost:5000/a
router.post("/regisster",userController.register);
router.post("/login")
module.exports = router;