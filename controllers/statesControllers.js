const State = require("../models/states");

const StatesController = {};
StatesController.getAllStates = async (req, res) => {
  try {
    let state = await State.findAll();
    res.status(201).send({
      success: true,
      message: "Bringing all States went successfully",
      data: state,
    });
  } catch (error) {
    res.status(501).send({
      success: false,
      message: "Something went wrong on getAllStates",
      error: error.message,
    });
  }
};
module.exports = StatesController;
