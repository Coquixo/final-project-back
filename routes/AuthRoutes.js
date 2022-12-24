const express = require("express");
const router = express.router;

const AuthController = require("../controllers/AuthController");

//NoAdmin // Admin
//Login:
router.post("/login", AuthController.logIn);

//NoAdmin
//SignIn
router.post("/signin", AuthController.signIn);

module.exports = router;
