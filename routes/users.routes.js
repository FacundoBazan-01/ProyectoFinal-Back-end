const express = require ("express")
const route = express.Router();
const {getUsers,getOneUser, postUsers, putUsers, deleteUsers, loginUser } = require("../controllers/users.controllers")

route.get("/", getUsers)

route.get("/:id", getOneUser)

route.post("/", postUsers)

route.post("/login", loginUser)

route.put("/:id", putUsers)

route.delete("/:id", deleteUsers)

module.exports=route