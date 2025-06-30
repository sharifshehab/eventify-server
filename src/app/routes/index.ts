import { Router } from "express";
import { eventRoutes } from "../event/event.route";
import { userRoutes } from "../user/user.route";

const routes = Router();
routes.use('/events', eventRoutes);
routes.use('/users', userRoutes);

export default routes;