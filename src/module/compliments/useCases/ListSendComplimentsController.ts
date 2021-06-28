import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListSendComplimentsUseCase } from "./ListSendComplimentsUseCase";



class ListSendComplimentsController{
 async handle(request:Request, response:Response):Promise<Response>{
  const {user_id} = request

   const listComplimentUseCase = container.resolve(ListSendComplimentsUseCase)
   const listCompliment = await listComplimentUseCase.execute(user_id)

   return response.json(listCompliment)

 }

}

export {ListSendComplimentsController}