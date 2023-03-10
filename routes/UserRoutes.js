const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userController");
const { isSameUser, isAdmin } = require("../middlewares/authMiddlewares");
//NoAdmin:
//User:

//Update my User
router.put("/:email/update", isSameUser(), UserController.updateUser);
//Delete My Account  // (admin can also errase whoever he wants)
router.delete("/:email/delete", isSameUser(), UserController.deleteUser);

// //Admin:
// //User:

// //Get all Users
router.get("/all", isAdmin(), UserController.getAllUsers);

// //Status:

// //Check a Users Status
router.get("/:email/status", isAdmin(), UserController.checkUserStatus);
// Change Someones State
router.put("/:email/status", isAdmin(), UserController.changeUserStatus);

module.exports = router;
