const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Facundo:l9rbJCJnTIVP2ooY@g4.frjmrit.mongodb.net/")
.then(()=> console.log("Base de datos conectado"))
.catch((error)=> console.log("No se puedo conectar con las base de datos", error))