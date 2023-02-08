const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usersController")

// localhost:3001/api/v1/users/
router.route("/")
    .get(usersController.getAllUsers)
    .post(usersController.createOneUser);

// localhost:3001/api/v1/users/:user
router.route("/:user")
    .get(usersController.getOneUser)
    .put(usersController.updateOneUser)
    .delete(usersController.deleteOneUser);


module.exports.router = router;