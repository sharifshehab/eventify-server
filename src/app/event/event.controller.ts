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

export const eventController = {
    createEvent,
};