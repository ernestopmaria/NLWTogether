import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListComplimentsByUser } from "./ListComplimentsByUser";


class ListComplimentsController{
 async handle(request:Request, response:Response):Promise<Response>{
  const {user_id} = request

   const listComplimentUseCase = container.resolve(ListComplimentsByUser)
   const listCompliment = await listComplimentUseCase.execute(user_id)

   return response.json(listCompliment)

 }

}

export {ListComplimentsController}