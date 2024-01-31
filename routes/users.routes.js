const express = require ("express")
const route = express.Router();
const {getUsers,getOneUser, postUsers, putUsers, deleteUsers, } = require("../controllers/users.controllers")

route.get("/", getUsers)

route.get("/:id", getOneUser)

route.post("/", postUsers)

route.put("/:id", putUsers)

route.delete("/:id", deleteUsers)

module.exports=route