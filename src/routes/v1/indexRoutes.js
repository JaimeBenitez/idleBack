const express = require("express");
const router = express.Router();
const usersRoutes = require("./usersRoutes")
const gameDataRoutes = require("./gameDataRoutes")

// localhost:3001/api/v1/
router.get("/", (req, res, next)=>{
    res.send("Hola Mundo")
})

router.use("/users",  usersRoutes.router);
router.use("/gameData",  gameDataRoutes.router);


module.exports.router = router


