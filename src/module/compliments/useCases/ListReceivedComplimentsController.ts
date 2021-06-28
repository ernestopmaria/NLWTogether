import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListReceivedComplimentsUseCase } from "./ListReceivedComplimentsUseCase";



class ListReceivedComplimentsController{
 async handle(request:Request, response:Response):Promise<Response>{
  const {user_id} = request

   const listComplimentUseCase = container.resolve(ListReceivedComplimentsUseCase)
   const listCompliment = await listComplimentUseCase.execute(user_id)
   return response.json(listCompliment)

 }

}

export {ListReceivedComplimentsController}