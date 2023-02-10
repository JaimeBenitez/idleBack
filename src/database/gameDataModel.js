const data = require("./gameData.json")
const fs = require("fs")

const getAllUsersGameData = () => {
    return data.gameData
}

const getOneUserGameData = (name) => {
    const oneUser = data.gameData[name]
    return oneUser
}


const createOneUserGameData = (newUser) =>{
    if (data["gameData"][`${newUser.playerName.replace(" ","")}`]){
        return false;
    }
    let playerName = newUser.playerName.replace(" ","");
    data["gameData"][playerName] = newUser

    fs.writeFileSync("./src/database/gameData.json", JSON.stringify(data,null,2), "utf8")
    return newUser; 
}

const updateOneUserGameData = (modUser) =>{
    
    
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
    createOneUserGameData,
    updateOneUserGameData,
    deleteOneUserGameData,
}