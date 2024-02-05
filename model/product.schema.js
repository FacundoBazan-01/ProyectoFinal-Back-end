const {Schema, model} = require("mongoose")

const ProductSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    codigo: {
        type: String,
        required: true
    },
    imagen: {
        type: String
    }
})

const ProductModel = model("products", ProductSchema)
module.exports = ProductModel; 
