import express from 'express'
import { CreateProduct,getProduct,PatchOne,DeletOne } from '../Controllers/ProductController.js';
import protect from '../Middlewaer/protect.js';
import { upload } from '../CloudinaryConfig/Cloundinary.js';

const ProductRouter = express.Router();

ProductRouter.post("/",protect,upload.single("image"), CreateProduct);
ProductRouter.get("/", protect, getProduct);
ProductRouter.patch("/:id",protect,PatchOne);
ProductRouter.delete("/:id",protect,DeletOne);

export default ProductRouter