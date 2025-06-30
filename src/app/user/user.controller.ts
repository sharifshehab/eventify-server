import { Request, Response } from "express";
import { User } from "./user.model";
import { z } from "zod";


const CreateUserZodSchema = z.object({
    name: z.string(),
    email: z.string().email().toLowerCase(),
    password: z.string().min(6, {message: "Password must be at least 6 characters sv"}), 
    photoURL: z.string().url()
})

const createUser = async (req: Request, res: Response) => {
    try {
        const validatedUserData = CreateUserZodSchema.parse(req.body);
        const user = await User.create(validatedUserData);
        res.status(200).send(user);
    } catch (error) {
        const err = error as any;
        res.status(400).send( {
            message: "Validation failed",
            success: false,
            error: err
        });
    }
}

const getUser = async (req: Request, res: Response) => { 
    try {
        const user = await User.findOne({ email: req.query.email, password: req.query.password  });
        if (user) {
            res.status(200).send({
                success: true,
                message: "Getting data successfully",
                data: user
            });
        }
    } catch (error){
        const err = error as any;
        res.status(400).send( {
          message: "Validation failed",
          success: false,
          error:  err
      });
      }
}

export const userController = {
    createUser,
    getUser
};
