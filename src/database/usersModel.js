const data = require("./users.json")
const fs = require("fs")

const getAllUsers = () => {
    return data.users
}

const getOneUser = (name) => {
    const oneUser = data.users[name]
    return oneUser
}


const createOneUser = (newUser) =>{
    if (data["users"][`${newUser.username.replace(" ","")}`]){
        return false;
    }
    let username = newUser.username.replace(" ","");
    data["users"][username] = newUser

    fs.writeFileSync("./src/database/users.json", JSON.stringify(data,null,2), "utf8")
    return newUser; 
}

const updateOneUser = (modUser) =>{
    
    if (!data["users"][`${modUser.username}`]){
        return false;
    }

    let username = modUser.username
        
    data["users"][username] = modUser
    fs.writeFileSync("./src/database/users.json", JSON.stringify(data,null,2), "utf8")
    
    return data["users"][username]

    

}

const deleteOneUser = (name) => {
    delete data.users[name]

    fs.writeFileSync("./src/database/users.json", JSON.stringify(data, null, 2),"utf8")
}

module.exports = {
    getAllUsers,
    getOneUser,
    // insertUser,
    createOneUser,
    updateOneUser,
    deleteOneUser,
}