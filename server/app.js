const express = require ("express")


class Server{
    constructor(){
        this.app=express();
        this.middlewars();
        this.routes();
    }

    middlewars(){
        this.app.use(express.json)
    }

    routes(){
      this.app.use("/api/products", require("../routes/products.routes"))
      this.app.use("/api/users", require("../routes/users.routes"))
    }

    listen(){
        this.app.listen(3001,()=>{
            console.log("Servidor corriendo en el puerto:" + 3001)
        })
    }
}

module.exports= Server;