import express from 'express';
import { getOnereg } from '../Controllers/userControllers.js';

const userRoute = express.Router();

userRoute.get("/:id", getOnereg)

export default userRoute