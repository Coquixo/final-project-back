const express = require("express");
const router = express.Router();

const CardsController = require("../controllers/cardsControllers");

//All users
//Get all data
router.get("/", CardsController.getAllCards);

module.exports = router;
