const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required
    },
    precio: {
        type: Number,
        required
    },
    codigo: {
        type: String,
        required
    },
})

const ProductModel = mongoose.model("product", ProductSchema)
module.exports = ProductModel; 
