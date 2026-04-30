import 'dotenv/config' 


import express from 'express';

import cors from 'cors'
import cookieParser from 'cookie-parser';
import { connectDB } from './config/db.js';

import LoginRouter from './Routes/loginRoute.js';
import RegisterRouter from './Routes/registerRoute.js';
import ProductRouter from './Routes/productRoute.js';
import userRoute from './Routes/userRoutes.js';


const app = express();
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://mern-crup-app.vercel.app" 
    ],
    credentials: true
}))
connectDB()
app.use(express.json());
app.use(cookieParser());


app.get("/", (req,res) => {
    res.json({
        success: true,
        message: "Backend is runing"
    })
})
app.use("/login", LoginRouter)
app.use("/register", RegisterRouter)
app.use("/api/users", userRoute)
app.use("/api/products", ProductRouter)


app.listen(process.env.PORT, () => {
    console.log("server is running NOWN on port",process.env.API_URL)
})
