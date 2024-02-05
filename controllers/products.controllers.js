const ProductModel = require("../model/product.schema")
const cloudinary = require("../helpers/cloudinary")

const getProducts = async (req, res)=>{
    try {
        const getAllProduct = await ProductModel.find();
        res.status(200).json({mensaje: "Productos encontrados correctamente", getAllProduct})
    } catch (error) {
        res.status(500).json({mensaje: "Server error", error});
    }
}

const getOneProduct = async (req, res)=>{
    try {
        const getProduct = await ProductModel.findOne({_id: req.params.id});
        res.status(200).json({mensaje: "Producto encontrado correctamente", getProduct})
    } catch (error) {
        res.status(500).json({mensaje: "Server error", error});
    }
}

const postProducts = async (req, res)=>{
    try {
        const { titulo, precio, codigo }= req.body;
        if(!titulo || !precio || !codigo){
            res.status(500).json({mensaje: "Algun campo esta vacio o es error el formato del dato"});
            return;
        }
        const result = await cloudinary.uploader.upload(req.file.path)
        const newProduct = new ProductModel({...req.body, imagen: result.secure_url })
        await newProduct.save();
        res.status(201).json({mensaje:"Producto creado correctamente", newProduct})
    } catch (error) {
        res.status(500).json({mensaje: "Server error", error});
    }
}

const putProducts= async (req, res)=>{
    try {
        const updateProduct = await ProductModel.findByIdAndUpdate({ _id:req.params.id }, req.body, {new: true})
        res.status(200).json({mensaje: "Producto actualizado correctamente", updateProduct})
    } catch (error) {
        res.status(500).json({mensaje: "Server error", error}); 
    }
}

const deleteProducts = async (req, res)=>{
    try {
        const productExist = await ProductModel.findOne({_id: req.params.id});
        if(!productExist){
            res.status(400).json({mensaje:"Este producto ya fue eliminado"})
        }
        const deleteProduct = await ProductModel.findByIdAndDelete({ _id: req.params.id})
        res.status(200).json({mensaje:"Producto eliminado correctamente"})
    } catch (error) {
        res.status(500).json({mensaje: "Server error", error}); 
    }
}

module.exports={getProducts, getOneProduct, postProducts, putProducts, deleteProducts}