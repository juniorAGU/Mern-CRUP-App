import express from 'express'
import { CreateOnereg } from '../Controllers/RegisterController.js';

const RegisterRouter = express.Router();

RegisterRouter.post("/",CreateOnereg);


export default RegisterRouter