import { model, Schema } from "mongoose";
import { IEvent } from "./event.interface";

const eventSchema = new Schema<IEvent>(
    {
        title: {
            type: String,
            required: [true, 'Please provide event title'],
        },
        name: {
            type: String,
            required: true,
        },
        dateTime: {
            // type: Date,
            type: String,
            required: [true, 'Please provide event date and time'],
        },
        location: {
            type: String,
            required: [true, 'Please provide event location'],
        },
        description: {
            type: String,
            required: [true, 'Please provide event description'],
        },
        AttendeeCount: {
            type: Number,
        },
        organizer: {
            type: String,
        },
        attendees: {
            type: [String],
            default: []
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
);

export const Event = model<IEvent>('Event', eventSchema);

