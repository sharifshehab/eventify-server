import { Router } from "express";
import { eventRoutes } from "../event/event.route";

const routes = Router();
routes.use('/events', eventRoutes);

export default routes;