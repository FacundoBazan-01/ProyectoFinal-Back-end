const express = require ("express")
const route = express.Router();
const {getProducts, getOneProduct, postProducts, putProducts, deleteProducts} = require("../controllers/products.controllers")
const multer = require("../middlewars/multer")

route.get("/", getProducts)

route.get("/:id", getOneProduct)

route.post("/", multer.single("imagen"), postProducts)

route.put("/:id", putProducts)

route.delete("/:id", deleteProducts)

module.exports=route