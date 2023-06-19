import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieRentDTO } from "../../dtos/CreateMovieRentDTO";

export class CreateMovieRentUseCase {
  async execute({ movieId, userId }: CreateMovieRentDTO): Promise<void> {
    const movieExists = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });
    if (!movieExists) {
      throw new AppError("Movie not exists!!");
    }

    const movieAlreadyExists = await prisma.movieRent.findFirst({
      where: {
        movieId,
      },
    });

    if(movieAlreadyExists) {
      throw new AppError("Filme alugado!!")
    }

    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!userExists) {
      throw new AppError("User not exists!!");
    }


    await prisma.movieRent.create({
      data: {
        movieId,
        userId,
      }
    })
  }
}
