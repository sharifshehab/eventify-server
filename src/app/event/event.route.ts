import { Router } from "express";
import { eventController } from "./event.controller";

export const eventRoutes = Router();

eventRoutes.post('/create-event', eventController.createEvent);   // create event