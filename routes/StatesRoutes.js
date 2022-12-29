const express = require("express");
const router = express.Router();

const StatesControllers = require("../controllers/statesControllers");
const { isAdmin } = require("../middlewares/authMiddlewares");

//All users
//Get all data
router.get("/", isAdmin(), StatesControllers.getAllStates);

module.exports = router;
