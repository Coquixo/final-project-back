const express = require("express");
const { changeUserStatus } = require("../controllers/userController");
const router = express.Router();

const UserController = require("../controllers/userController");

//NoAdmin:
//User:

//Update my User
router.put("/:email/update", UserController.updateUser);
//Delete My Account  // (admin can also errase whoever he wants)
router.delete("/:email/delete", UserController.deleteUser);

// //Admin:
// //User:

// //Get all Users
router.get("/all", UserController.getAllUsers);

// //Status:

// //Check a Users Status
router.get("/:email/status", UserController.checkUserStatus);
// Change Someones State
router.put("/:email/status", UserController.changeUserStatus);

module.exports = router;
