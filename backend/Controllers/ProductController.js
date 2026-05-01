import { Product } from "../Models/product.js"
import { uploadToCloudinary } from "../CloudinaryConfig/Cloundinary.js";



const CreateProduct = async (req,res,next) => {
    try{
        const { name, Description,price } = req.body;
        if(!name || !Description || !price){
            throw new Error("Invalid credentials")
        }
        console.log("req.file",req.file)
        if(!req.file){
            throw new Error("image not recognised")
        }
        const cloudinaryResult = await uploadToCloudinary(req.file.buffer)
        const image = cloudinaryResult.secure_url
        

        const savetoDB = await Product.create({name, description: Description,price,image})

        res.status(201).json({
            success: true,
            message: "successfully!!!",
            product: savetoDB
        })
    }catch(err){
        return next(err)
    }

}
const getProduct = async (req,res,next) => {
    try{
        const products = await Product.find().sort({createdAt: -1});
        res.json(products)

    }catch(err){
        return next(err)
    }
}
const PatchOne = async (req,res,next) => {
    try{
        const {name,Description,price} = req.body;

        const { id } = req.params

        if(!name || !Description || !price){
            throw new Error("invalid input")
        }
        const save = await Product.findByIdAndUpdate(
            id,
            { name, description: Description, price},
            {new: true}
        );

        if(!save){
            throw new Error(" Failed, something went wrong")
        }
        res.status(200).json({
            success: true,
            message: "successfull",
            products: save
        })
    }catch(err){
        return next(err)
    }

}
const DeletOne = async (req,res,next) => {
    try{
        const { id } = req.params;

        const deleteitem = await Product.findByIdAndDelete(id);

        if(!deleteitem){
            throw new Error("items not found ")
        }

        res.status(201).json({
            success: true,
            message: "successfully deleted"
        })
        
    }catch(err){
        return next(err)
    }
}
export {CreateProduct,getProduct,PatchOne,DeletOne}