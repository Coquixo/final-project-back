const express = require("express");
const router = express.Router();

const RolesControllers = require("../controllers/rolesControllers");

//All users
//Get all data
router.get("/", RolesControllers.getAllRoles);

module.exports = router;
