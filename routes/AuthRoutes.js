const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/authControllers");

//NoAdmin // Admin
//Login:
// router.post("/login", AuthController.logIn);
//NoAdmin
//SignIn
router.post("/signin", AuthController.signIn);

module.exports = router;
