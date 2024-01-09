const express = require ("express")
const route = express.Router();

route.get("/")

route.post("/",(req, res)=>{
    res.json("Metodo Post para productos")
})

route.put("/",(req, res)=>{
    res.json("Metodo Put para productos")
})

route.delete("/",(req, res)=>{
    res.json("Metodo Delete para productos")
})

module.exports=route