const {Schema, model} = require("mongoose")

const UserSchema = new Schema ({
    nombreUsuario: {
        type: String,
        required: true,
        unique: true,
    },

    contrasenia: {
        type: String,
        required:true
    },

    emailUsuario: {
        type: String,
        required: true,
        unique: true,

    }
})

const UserModel = model("users",UserSchema)
module.exports = UserModel