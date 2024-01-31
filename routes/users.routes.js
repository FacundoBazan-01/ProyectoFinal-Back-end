const express = require ("express")
const route = express.Router();
const {getUsers, postUsers, putUsers, deleteUsers} = require("../controllers/users.controllers")

route.get("/", getUsers)

route.post("/", postUsers)

route.put("/:id", putUsers)

route.delete("/:id", deleteUsers)

module.exports=route