const mongoose = require("mongoose")

mongoose.connect(process.env.MONGOOSE_CONNECT)
.then(()=> console.log("Base de datos conectado"))
.catch((error)=> console.log("No se puedo conectar con las base de datos", error))