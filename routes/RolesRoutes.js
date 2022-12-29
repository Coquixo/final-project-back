const express = require("express");
const router = express.Router();

const RolesControllers = require("../controllers/rolesControllers");
const { isAdmin } = require("../middlewares/authMiddlewares");

//All users
//Get all data
router.get("/", isAdmin(), RolesControllers.getAllRoles);

module.exports = router;
