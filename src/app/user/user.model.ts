import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: [true, 'Please provide a user name'],
        },
        email: {
            type: String,
            required: [true, 'Please provide an email address'],
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: [true, 'Please provide a password'],
            minLength: [6, 'Password must be at least 6 character, got {VALUE}'],
        },
        photoURL: {
            type: String,
            required: [true, 'Please provide a photo URL'],
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export const User = model<IUser>('User', userSchema);

