import mongoose from "mongoose";
import { Schema } from "mongoose";

const productschema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {timestamps: true})

export const Product = mongoose.model("Products",productschema)