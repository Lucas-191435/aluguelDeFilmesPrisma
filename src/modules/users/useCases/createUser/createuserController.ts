import { CreateUserUseCase } from './createUserCase';
import { Request, Response } from "express";

export class CreateUserController {
  async handle (req: Request, res: Response){
    const {name, email} = req.body;

    const createUserUseCase = new CreateUserUseCase()

    const result  = await createUserUseCase.execute({email, name})

    return res.status(201).json(result);
  }
}