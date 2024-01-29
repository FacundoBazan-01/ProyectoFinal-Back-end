const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    titulo: String,
    precio: Number,
    codigo: String,
})

const ProductModel = mongoose.model("product", ProductSchema)
module.exports = ProductModel; 
