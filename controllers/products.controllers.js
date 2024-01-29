const ProductModel = require("../model/product.schema")

const getProducts = (req, res)=>{
    res.json("Metodo Get para productos")
}

const postProducts = (req, res)=>{
    res.json("Metodo Post para productos")
}

const putProducts= (req, res)=>{
    res.json("Metodo Put para productos")
}

const deleteProducts = (req, res)=>{
    res.json("Metodo Delete para productos")
}

module.exports={getProducts, postProducts, putProducts, deleteProducts}