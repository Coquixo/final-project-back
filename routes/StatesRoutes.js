const express = require("express");
const router = express.Router();

const StatesControllers = require("../controllers/statesControllers");

//All users
//Get all data
router.get("/", StatesControllers.getAllStates);

module.exports = router;
