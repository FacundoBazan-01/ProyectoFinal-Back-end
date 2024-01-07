const express = require ("express")
const app = express();

app.get("/",(req, res)=>{
    res.send("Empezamos con el Back")
})

app.listen(3001,()=>{
    console.log("Servidor corriendo en el puerto:" + 3001)
})