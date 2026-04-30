import { User } from "../Models/user.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

const protect = async (req,res,next) => {
    try{
        const token = req.cookies.token;
        if(!token){
            throw new Error(" Acess denied")
        }
        const isMatch =  jwt.verify(token,process.env.JWT_TK);
        if(!isMatch){
            throw new Error("Access denied")
        }

        const user = await User.findById(isMatch.id).select("-password");

        req.user = user

        next()
    }catch(err){
        console.log(err.message)
        return next(err)
    }
}
export default protect