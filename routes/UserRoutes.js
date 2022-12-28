const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userController");
const { isSameUser } = require("../middlewares/authMiddlewares");
//NoAdmin:
//User:

//Update my User
router.put("/:email/update", isSameUser(), UserController.updateUser);
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
