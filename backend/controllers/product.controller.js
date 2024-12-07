import Product from "../models/product.model.js"
import mongoose from "mongoose";
export const getProduct = async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ success : true, data : products})
    } catch (error) {
        console.log("Error to fatch data");
        res.status(500).json({success : false, message : "server error !"}) 
    }
}


export const createProduct = async(req,res) => {
    // res.send("Server is Ready -> !");
    const product = req.body;  //user will send this data

    if(!product.name || !product.price || !product.Image){
        return res.status(400).json({success : false,message : "please provide all fields"});
    }

    const newProduct = new Product(product)
    try {
        await newProduct.save();
        res.status(201).json({ success : true, data : newProduct})
    } catch (error) {
        console.log("Error to pass the product :",error);
        res.status(500).json({ success : false, message : "Server Error!"})
    }
}

export const updateProduct = async (req,res) => {
    const { id } = req.params;

    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).json({ success : false, message : "Server Error"})

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new: true});
        
        res.status(200).json({success:true,data : updatedProduct})

    } catch (error) {
        res.status(404).json({ success : false, message : "Server Error!"})
    }
}

export const deleteProduct = async (req,res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({ success : false, message : "Invalid Product"})

    try {
            await Product.findByIdAndDelete(id);
            res.status(200).json({ success : true, message : "Product Deleted"});
    } catch (error) {
        res.status(500).json({ success : false, message : "Server Error !"});
    }
}