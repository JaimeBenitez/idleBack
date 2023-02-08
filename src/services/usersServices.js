const usersModel = require("../database/usersModel");
const {v4: uuid} = require("uuid")

const getAllUsers = () => {
  //Se llama al Modelo, más concretamente, A LA FUNCION QUE OBTIENE TODOS LOS USUARIOS
  const allUsers = usersModel.getAllUsers();
  return allUsers;
};

const createOneUser = (user) => {
  
  // Implemento la lógica de negocio. Esta es, que el usuario tiene un id
  //que tiene una fecha de alta y una fecha de modificación
  const newUser = {
    ...user,
    id: uuid(), //GENERAR UN ID ALEATORIO CON UUID
    registerDate: new Date().toLocaleDateString(),
    modDate: new Date().toLocaleDateString(),
  };

  // Llamo al Modelo para realizar esa interacción con la BDD
  const insertedUser = usersModel.insertUser(newUser)
  
  if(!insertedUser) return false
  return insertedUser
};

const getOneUser = (name) => {
  const oneUser = usersModel.getOneUser(name);
  return oneUser;
};

const updateOneUser = (name,modUser) => {
  
  const user = usersModel.getOneUser(name);
  if (!user) {
    return false
  }
  return usersModel.updateOneUser(modUser);  
};

const deleteOneUser = (name) => {
  const user = usersModel.getOneUser(name);
  if (!user) {
    return false
  }
  usersModel.deleteOneUser(name)

  if(!usersModel.getOneUser(name)){
    return user
  }else{
    return false
  }
}

module.exports = {
  getAllUsers,
  createOneUser,
  getOneUser,
  updateOneUser,
  deleteOneUser,
};
