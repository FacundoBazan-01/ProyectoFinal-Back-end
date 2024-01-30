const express = require ("express")
const route = express.Router();
const {getProducts, getOneProduct, postProducts, putProducts, deleteProducts} = require("../controllers/products.controllers")

route.get("/", getProducts)

route.get("/:id", getOneProduct)

route.post("/", postProducts)

route.put("/:id", putProducts)

route.delete("/:id", deleteProducts)

module.exports=route