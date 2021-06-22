import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUsersUserCase } from "./listUsersUseCase";


class ListUsersController{

  async handle(request:Request, response:Response):Promise<Response>{
    const listUsersUseCase = container.resolve(ListUsersUserCase)

    const allUsers = await listUsersUseCase.execute()

    return response.json(allUsers)
  }
}

export {ListUsersController}