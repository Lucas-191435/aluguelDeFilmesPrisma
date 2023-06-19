import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

export class CreateUserUseCase {
  async execute ({name, email}: CreateUserDTO) {
    const userAlreadyExists = await prisma.user.findUnique({where: {
      email
    }})

    if(userAlreadyExists){
     throw new AppError("user already exists");
    }

    const user = await prisma.user.create({
      data: {
        email,
        name,
      }
    })

    return user;
  }
}