const express = require ("express")
const {getUsers,getOneUser, postUsers, putUsers, deleteUsers, loginUser } = require("../controllers/users.controllers");
const auth = require("../middlewars/authorization");
const route = express.Router();

route.get("/", getUsers)

route.get("/:id", getOneUser)

route.post("/", postUsers)

route.post("/login", loginUser)

route.put("/:id", putUsers)

route.delete("/:id", deleteUsers)

module.exports=route