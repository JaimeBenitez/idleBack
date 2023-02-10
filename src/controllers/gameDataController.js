const gameDataServices = require("../services/gameDataServices");

//  /api/v1/gameData
const getAllUsersGameData = (req, res, next) => {
  
  const allUsersGameData = gameDataServices.getAllUsersGameData(); 
  res.send(allUsersGameData);
  
  next()
};

//  /api/v1/gameData
const createOneUserGameData = (req, res, next) => {
  const { body } = req;
  console.log(body);

  if (!body.playerName || !body.hasOwnProperty('principalMoney') 
    || !body.hasOwnProperty('HTMLAmount') || !body.hasOwnProperty('HTMLUnlocked') 
    || !body.hasOwnProperty('CSSAmount') || !body.hasOwnProperty('CSSUnlocked') 
    || !body.hasOwnProperty('JSAmount') || !body.hasOwnProperty('JSUnlocked') 
    || !body.hasOwnProperty('NodeAmount') || !body.hasOwnProperty('NodeUnlocked') 
    || !body.hasOwnProperty('JavaAmount') || !body.hasOwnProperty('JavaUnlocked') 
    || !body.hasOwnProperty('PHPAmount') || !body.hasOwnProperty('PHPUnlocked')){
    res.status(400).send({mensaje: "faltan datos"});
    }else {

    // Extraigo los datos del body de la petición para mandarlos al servicio 
    const newUserGameData = {
      "playerName": body.playerName,
      "principalMoney": body.principalMoney,
      "HTMLAmount": body.HTMLAmount,
      "HTMLUnlocked": body.HTMLUnlocked,
      "CSSAmount": body.CSSAmount,
      "CSSUnlocked": body.CSSUnlocked,
      "JSAmount": body.JSAmount,
      "JSUnlocked": body.JSUnlocked,
      "NodeAmount": body.NodeAmount,
      "NodeUnlocked": body.NodeUnlocked,
      "JavaAmount": body.JavaAmount,
      "JavaUnlocked": body.JavaUnlocked,
      "PHPAmount": body.PHPAmount,
      "PHPUnlocked": body.PHPUnlocked,
    }
    const createdUserGameData = gameDataServices.createOneUserGameData(newUserGameData);

    if (createdUserGameData) res.status(200).send(createdUserGameData).end();
    else res.status(409).end();
  }

  next();
};

//  /api/v1/gameData/:user
const getOneUserGameData = (req, res, next) => {
  //PRIMERO obtengo el parámetro de ruta
  const { user } = req.params;

  const oneUser = gameDataServices.getOneUserGameData(user);

  if (oneUser) {
    res.send(oneUser);
  } else {
    res.status(404);
  }
  next()
};

// /api/v1/gameData/:user
const updateOneUserGameData = (req, res, next) => {
  let { user } = req.params
  let { body } = req
  
  const UserToUpdate = gameDataServices.updateOneUserGameData(user, body)
  if(!UserToUpdate){    
    res.status(400).end();
  } else {
    res.send(UserToUpdate).end();
  }
  
  next()
};

// /api/v1/gameData/:user
const deleteOneUserGameData = (req, res, next) => {
  let { user } = req.params

  const UserToDelete = gameDataServices.deleteOneUserGameData(user);

  if(!UserToDelete){
    res.status(400).end();
  } else {
    res.send(UserToDelete).end();
  }
 
  next()
};

module.exports = {
  getAllUsersGameData,
  createOneUserGameData,
  getOneUserGameData,
  updateOneUserGameData,
  deleteOneUserGameData,
};
