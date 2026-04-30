import { User } from "../Models/user.js";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const CreateOnereg = async (req,res,next) => {
    try{
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            throw new Error("make sure you input your details")
        }
        const existence = await User.findOne({email});

        if(existence){
            throw new Error("Email already Existed")
        }
        const harsh = await  bcrypt.hash(password, 10);
        
        const saveDB = await User.create({name,email, password: harsh});
        console.log(saveDB,"saved to database")
        const token =  jwt.sign(
            {UserId: saveDB.id, Useremail: saveDB.email},
            process.env.JWT_TK,
            { expiresIn: process.env.EXPIR_IN}
        )

        const oneDayInMs = 24 * 60 * 60 * 1000;
        res.cookie("token", token, {
            httpOnly: true,
            maxAge: oneDayInMs,
            secure: false,
            sameSite: "lax"
        })

        res.status(201).json({
            success: true,
            message: "you have successfully registered",
            user: {
                id: saveDB.id,
                name: saveDB.name,
                email: saveDB.email,
            }
        })


    }catch(err){
        return next(err)
    }

}

export {CreateOnereg,}