import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController{

async handle(request:Request, response:Response):Promise<Response>{
 try{ const {name, email,admin} = request.body
  const createUserUseCase = container.resolve(CreateUserUseCase)

  await createUserUseCase.execute({email,name,admin})
  return response.status(201).send()
}catch(err){
  return response.status(400).json({error:err.message})
}}
}

export {CreateUserController}