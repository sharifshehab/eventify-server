import { Router } from "express";
import { userController } from "./user.controller";

export const userRoutes = Router();

userRoutes.post('/create-user', userController.createUser);   // create user
userRoutes.get('/get-user', userController.getUser);        // get user