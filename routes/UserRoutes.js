const express = require("express");
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
router.get("/:email/check", UserController.checkUserStatus);
// //Change a Users Status (Disable)
// router.put("/:email/disable", UserController.disableUser);
// //Change a Users Status (Enable)
// router.put("/:email/enable", UserController.enableUser);

module.exports = router;
