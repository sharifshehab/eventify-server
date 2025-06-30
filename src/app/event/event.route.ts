import { Router } from "express";
import { eventController } from "./event.controller";

export const eventRoutes = Router();

eventRoutes.post('/create-event', eventController.createEvent);                // add event route
eventRoutes.get('/all-events/', eventController.getEvents);                   // get all events route
eventRoutes.get('/users-event/:userEmail', eventController.getUsersEvent);   // get specific user events route
eventRoutes.delete('/delete-event/:eventId', eventController.deleteEvent);  // delete an event
eventRoutes.get('/event/:eventId', eventController.singleEvent);           // get single event by "id"
eventRoutes.patch('/edit-event/:eventId', eventController.updateEvent);   // update event