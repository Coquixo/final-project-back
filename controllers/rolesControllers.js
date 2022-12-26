const Role = require("../models/roles");

const RolesController = {};
RolesController.getAllRoles = async (req, res) => {
  try {
    let role = await Role.findAll();
    res.status(201).send({
      success: true,
      message: "Bringing all Roles went successfully",
      data: role,
    });
  } catch (error) {
    res.status(501).send({
      success: false,
      message: "Something went wrong on getAllRoles",
      error: error.message,
    });
  }
};
module.exports = RolesController;
