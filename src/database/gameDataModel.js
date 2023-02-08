const data = require("./gameData.json")
const fs = require("fs")

const getAllUsersGameData = () => {
    return data.gameData
}

const getOneUserGameData = (name) => {
    const oneUser = data.gameData[name]
    return oneUser
}

const insertUserGameData = (user) => {
    //meto el usuario en el objeto users
    const playerName = user.playerName
    data.gameData[playerName] = user

    //Escribo el fichero con esos nuevos data
    fs.writeFileSync(
      "./src/database/gameData.json",
      JSON.stringify(data, null, 2),
      "utf8"
    );

    return getOneUserGameData(playerName)
}
const createOneUserGameData = (newUser) =>{
    if (data["gameData"][`${newUser.playerName.replace(" ","").toLowerCase()}`]){
        return false;
    }
    let playerId = newUser.playerName.replace(" ","").toLowerCase();
    data["gameData"][playerId] = newUser

    fs.writeFileSync("./src/database/gameData.json", JSON.stringify(data,null,2), "utf8")
    return newUser; 
}

const updateOneUserGameData = (modUser) =>{
    console.log(modUser)
    
    if (!data["gameData"][`${modUser.playerName}`]){
        return false;
    }

    let playerName = modUser.playerName
        
    data["gameData"][playerName] = modUser
    fs.writeFileSync("./src/database/gameData.json", JSON.stringify(data,null,2), "utf8")
    
    return data["gameData"][playerName]   

}

const deleteOneUserGameData = (name) => {
    delete data.gameData[name]

    fs.writeFileSync("./src/database/gameData.json", JSON.stringify(data, null, 2),"utf8")
}

module.exports = {
    getAllUsersGameData,
    getOneUserGameData,
    insertUserGameData,
    createOneUserGameData,
    updateOneUserGameData,
    deleteOneUserGameData,
}