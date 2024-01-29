const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
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
})

const ProductModel = mongoose.model("product", ProductSchema)
module.exports = ProductModel; 
