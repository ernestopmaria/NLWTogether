import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListTagsUseCase } from "./listTagsUseCase";




class ListTagsController{
 async handle(request:Request, response:Response):Promise<Response>{
   const listTagsUseCase = container.resolve(ListTagsUseCase)
   const listCompliment = await listTagsUseCase.execute()

   return response.json(listCompliment)

 }

}

export {ListTagsController}