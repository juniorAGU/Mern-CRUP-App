import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: [5, "name must be above 5 letters"],
        maxlength: [25, "name must not be above 25 letters"]
    },
    email: {
        type: String,
        unique: true, 
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "password should be more than 6"]
    }
},{timestamps: true})

export const User = mongoose.model("User",UserSchema)