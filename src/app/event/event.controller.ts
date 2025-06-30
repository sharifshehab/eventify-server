import { Request, Response } from "express";
import { Event } from "./event.model";

const createEvent = async (req: Request, res: Response) => {
    try {
        const event = await Event.create(req.body);
        res.status(200).send(event);
    } catch (err) {
        res.status(400).send(err);
    }
}

const getUsersEvent = async (req: Request, res: Response) => {
    try {
        const events = await Event.find({organizer: req.params.userEmail});
        res.status(200).send(events);
    } catch (err) {
        res.status(400).send(err);
    }
}

const deleteEvent = async (req: Request, res: Response) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.eventId);
        res.status(200).send(event);
    } catch (err) {
        res.status(400).send(err);
    }
}

const singleEvent = async (req: Request, res: Response) => {
    try {
        const event = await Event.findById(req.params.eventId);
        res.status(200).send(event);
    } catch (err) {
        res.status(400).send(err);
    }
}

const editEvent = async (req: Request, res: Response) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(req.params.eventId, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedEvent) {
            return res.status(400).send({
                message: "Update failed",
                success: false
            })
        }
        res.status(200).send(updatedEvent);
    } catch (err) {
        res.status(400).send(err);
    }
}

export const eventController = {
    createEvent,
    getUsersEvent,
    deleteEvent,
    singleEvent,
    editEvent
};