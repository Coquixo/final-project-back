const Card = require("../models/cards.js");

const CardsController = {};

CardsController.getAllCards = async (req, res) => {
  try {
    let card = await Card.findAll();
    res.status(201).send({
      success: true,
      message: "Bringing all Cards went successfully",
      data: card,
    });
  } catch (error) {
    res.status(501).send({
      success: false,
      message: "Something went wrong on getAllCards",
      error: error.message,
    });
  }
};

module.exports = CardsController;
