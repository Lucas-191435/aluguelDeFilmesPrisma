import { Router } from "express";

import { CreateUserController } from '../modules/users/useCases/createUser/createuserController';
import { GetAllUsersController } from '../modules/users/useCases/getAllUser/GetAllUsersController';
import { CreateUserDTO } from './../modules/users/dtos/CreateUserDTO';

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();
const userRoutes = Router();

userRoutes.post('/', createUserController.handle)
userRoutes.get('/', getAllUsersController.handle)

export {userRoutes}