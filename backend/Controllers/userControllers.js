import { User } from "../Models/user.js";

const getOnereg = async (req,res,next) => {
    try{
        const identity = req.params.id;
        const user = await User.findById(identity).select("-password");

        if(!user){
            throw new Error("user does not exist")
        }

        res.status(201).json(user)



    }catch(err){
        return next(err)
    }
}
export { getOnereg }