import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController{

async handle(request:Request, response:Response):Promise<Response>{
  const {name, email,admin} = request.body
  const createUserUseCase = await container.resolve(CreateUserUseCase)

  await createUserUseCase.execute({email,name,admin})
  return response.status(201).send()
}}

export {CreateUserController}