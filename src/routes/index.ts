import { Router } from 'express';

import { moviesRoutes } from './movie.routers';
import { userRoutes } from './user.routers';

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/movies", moviesRoutes);

export { routes}