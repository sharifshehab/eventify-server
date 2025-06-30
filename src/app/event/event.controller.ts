import { Request, Response } from "express";
import { Event } from "./event.model";

// add new event
const createEvent = async (req: Request, res: Response) => {
    try {
        const event = await Event.create(req.body);
        res.status(200).send(event);
    } catch (err) {
        res.status(400).send(err);
    }
}

// get all events
const getEvents = async (req: Request, res: Response) => {
    try {
        const searchValue = req.query.search;
        const dateValue = req.query.date;
        // console.log(date);

        let query = {};
        if (typeof searchValue === 'string' && searchValue.trim() !== '') {
            query = {
                title: { $regex: searchValue, $options: "i" }            
            };
        }
        if (dateValue) {
            query = {
                dateTime: dateValue
            };
        }

        const events = await Event.find(query);

        res.status(200).send(events);
    } catch (err) {
        res.status(400).send(err);
    }
}

// get user events
const getUsersEvent = async (req: Request, res: Response) => {
    try {
        const events = await Event.find({organizer: req.params.userEmail});
        res.status(200).send(events);
    } catch (err) {
        res.status(400).send(err);
    }
}

// delete event
const deleteEvent = async (req: Request, res: Response) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.eventId);
        res.status(200).send(event);
    } catch (err) {
        res.status(400).send(err);
    }
}

// get single event by "id"
const singleEvent = async (req: Request, res: Response) => {
    try {
        const event = await Event.findById(req.params.eventId);
        res.status(200).send(event);
    } catch (err) {
        res.status(400).send(err);
    }
}

// update event
const updateEvent = async (req: Request, res: Response): Promise<any> => {
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
    getEvents,
    getUsersEvent,
    deleteEvent,
    singleEvent,
    updateEvent
};