const ProductModel = require("../model/product.schema")

const getProducts = (req, res)=>{
    res.json("Metodo Get para productos")
}

const postProducts = (req, res)=>{
    try {
        const { titulo, precio, codigo }= req.body
        if(!titulo || !precio || !codigo){
            res.status(500).json({mensaje: "Algun campo esta vacio o es error el formato del dato"});
            return
        }
        const newProduct = new ProductModel(req.body)
        newProduct.save();
        res.status(201).json({mensaje:"Producto creado correctamente", newProduct})
    } catch (error) {
        res.status(500).json({mensaje: "Algun campo esta vacio o es error el formato del dato", error});
    }
    res.json("Metodo Post para productos")
}

const putProducts= (req, res)=>{
    res.json("Metodo Put para productos")
}

const deleteProducts = (req, res)=>{
    res.json("Metodo Delete para productos")
}

module.exports={getProducts, postProducts, putProducts, deleteProducts}