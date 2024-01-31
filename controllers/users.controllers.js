const UserModel = require("../model/user.schema")

const getUsers = async (req, res)=>{
    try {
        const getAllUser = await UserModel.find();
        res.status(200).json({mensaje:"Usuarios encontrados exitosamente", getAllUser})
        
    } catch (error) {
    res.status(500).json({mensaje: "Server error", error});
    }
}

const postUsers = async (req, res)=>{
   try {
    const {nombreUsuario} = req.body;
    const userExist = await UserModel.findOne({nombreUsuario})
    if(userExist){
        res.status(400).json({mensaje:"Usuario ya existente"})
        return;
    }
    const newUser = new UserModel(req.body)
    await newUser.save();
    res.status(201).json({mensaje: "Usuario creado correctamente", newUser});

   } catch (error) {
    res.status(500).json({mensaje: "Server error", error});
   }
}

const putUsers = async (req, res)=>{
    try {
    const updateUser = await UserModel.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true});
    res.status(200).json({mensaje:"Usuario actualizado correctamente", updateUser})
    } catch (error) {
    res.status(500).json({mensaje: "Server error", error});   
    }
}

const deleteUsers = (req, res)=>{
    res.json("Metodo Get para productos")
}

module.exports = {getUsers, postUsers, putUsers, deleteUsers}