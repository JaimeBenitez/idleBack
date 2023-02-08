const express = require("express");
const router = express.Router();
const gameDataController = require("../../controllers/gameDataController")

// localhost:3001/api/v1/gameData/
router.route("/")
    .get(gameDataController.getAllUsersGameData)
    .post(gameDataController.createOneUserGameData);

// localhost:3001/api/v1/gameData/:user
router.route("/:user")
    .get(gameDataController.getOneUserGameData)
    .put(gameDataController.updateOneUserGameData)
    .delete(gameDataController.deleteOneUserGameData);


module.exports.router = router;