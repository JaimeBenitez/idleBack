const usersServices = require("../services/usersServices");

//  /api/v1/users
const getAllUsers = (req, res, next) => {
  
  const allUsers = usersServices.getAllUsers(); 
  res.send(allUsers);
  
  next()
};

//  /api/v1/users
const createOneUser = (req, res, next) => {
  const { body } = req;

  if (!body.username || !body.email || !body.password)
    res.status(400).send({mensaje: "faltan datos"});
  else {

    // Extraigo los datos del body de la petición para mandarlos al servicio 
    const newUser = {
      "username": body.username,
      "email": body.email,
      "password": body.password
    }
    const createdUser = usersServices.createOneUser(newUser);

    if (createdUser) res.status(200).send(createdUser).end();
    else res.status(409).end();
  }

  next();
};

//  /api/v1/users/:user
const getOneUser = (req, res, next) => {
  //PRIMERO obtengo el parámetro de ruta
  const { user } = req.params;

  const oneUser = usersServices.getOneUser(user);

  if (oneUser) {
    res.send(oneUser);
  } else {
    res.status(404);
  }
  next()
};

// /api/v1/users/:user
const updateOneUser = (req, res, next) => {
  let { user } = req.params
  let { body } = req
  
  const UserToUpdate = usersServices.updateOneUser(user, body)
  if(!UserToUpdate){    
    res.status(400).end();
  } else {
    res.send(UserToUpdate).end();
  }
  
  next()
};

// /api/v1/users/:user
const deleteOneUser = (req, res, next) => {
  let { user } = req.params

  const UserToDelete = usersServices.deleteOneUser(user);

  if(!UserToDelete){
    res.status(400).end();
  } else {
    res.send(UserToDelete).end();
  }
 
  next()
};

module.exports = {
  getAllUsers,
  createOneUser,
  getOneUser,
  updateOneUser,
  deleteOneUser,
};
