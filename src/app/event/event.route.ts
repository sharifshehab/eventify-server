import { Router } from "express";
import { eventController } from "./event.controller";

export const eventRoutes = Router();

eventRoutes.post('/create-event', eventController.createEvent);   // create event
eventRoutes.get('/users-event/:userEmail', eventController.getUsersEvent);   // get specific user events
eventRoutes.delete('/delete-event/:eventId', eventController.deleteEvent);   // delete an event