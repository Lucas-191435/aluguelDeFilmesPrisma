import { AppError } from "../../../../erros/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateMovieDTO } from "../../dtos/CreateMovieDTO";

export class CreateMovieUseCase {
  async execute({ title, duration, release_date }: CreateMovieDTO) {
    const movieAlreadyExists = await prisma.movie.findUnique({
      where: {
        title,
      },
    });

    if (movieAlreadyExists) {
      throw new AppError("Movie already exists");
    }

    const movie = await prisma.movie.create({
      data: {
        title,
        duration,
        release_date,
      },
    });

    return movie;
  }
}
