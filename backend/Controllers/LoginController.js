import { User } from "../Models/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


const CreateOne = async (req,res,next) => {
    try{
        const { email , password } = req.body;
        if(!email || !password){
            throw new Error("password is required")
        }
        const exist = await User.findOne( { email } )
        if(!exist){
            throw new Error(" invalid Email or password")
        }
        console.log(exist)
        const isMatch = await bcrypt.compare(password,  exist.password)
        if(!isMatch){
            throw new Error("Invalid email or password")
        }
        const token = jwt.sign(
            {id: exist.id},
            process.env.JWT_TK,
            {expiresIn: process.env.EXPIR_IN}
        )
        const oneDayInMs = 24 * 60 * 60 * 1000;
        res.cookie("token",token,{
            httpOnly: true,
            maxAge: oneDayInMs,
            secure: true,
            sameSite: "none"
        })

        res.status(201).json({
            success: true,
            user: {id: exist.id,name: exist.name, email: exist.email},
            message: "you are successfully loged in"
        })

    }catch(err){
        return next(err)
    }

}
const getOne = async (req,res,next) => {
    try{

    }catch(err){
        return next(err)
    }
}
export {CreateOne,getOne}