import "express-async-errors";
import express, { NextFunction, Request, Response, request } from 'express';
import { routes } from './routes';
import { AppError } from "./erros/AppError";

const app = express();
app.use(express.json());
app.use(routes)


app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppError){
    console.log(err)
    return response.status(err.statusCode).json({
      status: "Error",
      message: err.message
    })
  }

  return response.status(500).json({
    status: "Error",
    message: `Internal Server Error - ${err.message}`
  })
})

app.listen(3333, () => console.log("server ins running"))