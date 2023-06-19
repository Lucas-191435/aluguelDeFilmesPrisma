import { Router } from "express";

import { CreateMovieController } from "../modules/Movies/useCases/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/Movies/useCases/createMovieRent/CreateMovieRentController";
import { GetMoviesByReleaseDateController } from "./../modules/Movies/useCases/getMoviesByReleaseDate/GetMoviesByReleaseDateController";

const createMovieController = new CreateMovieController();
const getMoviesByReleaseDateController = new GetMoviesByReleaseDateController();
const createMovieRentController = new CreateMovieRentController();
const moviesRoutes = Router();

moviesRoutes.post("/", createMovieController.handle);
moviesRoutes.get("/release", getMoviesByReleaseDateController.handle);
moviesRoutes.post("/rent", createMovieRentController.handle);
export { moviesRoutes };
