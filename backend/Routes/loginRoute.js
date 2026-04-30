import express from 'express'
import { CreateOne, getOne } from '../Controllers/LoginController.js'

const LoginRouter = express.Router();

LoginRouter.post("/", CreateOne);
LoginRouter.get("/", getOne)

export default LoginRouter