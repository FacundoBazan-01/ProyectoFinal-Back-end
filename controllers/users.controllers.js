const UserModel = require("../model/user.schema");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res)=>{
    try {
        const getAllUser = await UserModel.find();
        res.status(200).json({mensaje:"Usuarios encontrados exitosamente", getAllUser})
        
    } catch (error) {
        res.status(500).json({mensaje: "Server error", error});
    }
}

const getOneUser = async (req, res)=>{
    try {
        const getUser = await UserModel.findOne({_id: req.params.id});
        res.status(200).json({mensaje:"Usuario encontrado existosamente", getUser})
    } catch (error) {
        res.status(500).json({mensaje: "Server error", error});    
    }
}

const postUsers = async (req, res)=>{
   try {
        const {nombreUsuario, contrasenia} = req.body;
        const userExist = await UserModel.findOne({nombreUsuario})
        if(userExist){
            res.status(400).json({mensaje:"Usuario ya existente"})
            return;
        }
        const newUser = new UserModel(req.body)
        let salt = bcryptjs.genSaltSync(10);
        newUser.contrasenia = bcryptjs.hashSync(contrasenia, salt);
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

const deleteUsers = async (req, res)=>{
   try {
        const userExist = await UserModel.findOne({_id: req.params.id})
        if(!userExist){
            res.status(400).json({mensaje:"Este usuario ya fue eliminado"})
            return;
        }
        const deleteUser = await UserModel.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({mensaje:"Usuario eliminado correctamente"})
   } catch (error) {
        res.status(500).json({mensaje: "Server error", error});
   }
}

const loginUser = async (req, res)=>{
    try {
        const {nombreUsuario, contrasenia} = req.body;
        const userExist = await UserModel.findOne({nombreUsuario})
        if(!userExist){
            res.status(400).json({mensaje:"Usuario no existente"})
            return;
        }
        const corroboracionContrasenia = await bcryptjs.compare(contrasenia, userExist.contrasenia) 
        if(!corroboracionContrasenia){
            res.status(400).json({mensaje:"Las contracenias no coinciden"})
            return; 
        }
        const payload ={
            id:userExist._id,
            role:userExist.role
        }
        const token= jwt.sign(payload,process.env.SECRET_KEY)
       
        res.status(200).json({mensaje:"Usuario logueado", token})
    } catch (error) {
        res.status(500).json({mensaje: "Server error", error});
    }
}

module.exports = {getUsers,getOneUser, postUsers, putUsers, deleteUsers, loginUser}