const gameDataModel = require("../database/gameDataModel");


const getAllUsersGameData = () => {
  //Se llama al Modelo, más concretamente, A LA FUNCION QUE OBTIENE TODOS LOS USUARIOS
  const allUsersGameData = gameDataModel.getAllUsersGameData();
  return allUsersGameData;
};

const createOneUserGameData = (newUserGameData) => {
  // Llamo al Modelo para realizar esa interacción con la BDD
  const insertedUser = gameDataModel.createOneUserGameData(newUserGameData)
  
  if(!insertedUser) return false
  return insertedUser
};

const getOneUserGameData = (name) => {
  const oneUser = gameDataModel.getOneUserGameData(name);
  return oneUser;
};

const updateOneUserGameData = (name,modUser) => {
  
  const user = gameDataModel.getOneUserGameData(name);
  if (!user) {
    return false
  }
  return gameDataModel.updateOneUserGameData(modUser);  
};

const deleteOneUserGameData = (name) => {
  const user = gameDataModel.getOneUserGameData(name);
  if (!user) {
    return false
  }
  gameDataModel.deleteOneUserGameData(name)

  if(!gameDataModel.getOneUserGameData(name)){
    return user
  }else{
    return false
  }
}

module.exports = {
  getAllUsersGameData,
  createOneUserGameData,
  getOneUserGameData,
  updateOneUserGameData,
  deleteOneUserGameData,
};
