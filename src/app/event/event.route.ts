import { Router } from "express";
import { eventController } from "./event.controller";

export const eventRoutes = Router();

eventRoutes.post('/create-event', eventController.createEvent);   // create event
eventRoutes.get('/users-event/:userEmail', eventController.getUsersEvent);   // get specific user events
eventRoutes.delete('/delete-event/:eventId', eventController.deleteEvent);   // delete an event
eventRoutes.get('/event/:eventId', eventController.singleEvent);   // single event
eventRoutes.patch('/edit-event/:eventId', eventController.editEvent);   // update an event