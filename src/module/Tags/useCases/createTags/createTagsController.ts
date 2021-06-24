import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateTagsUseCase } from "./createTagsUseCase";


class CreateTagsController{

  async handle(request:Request, response:Response):Promise<Response>{
    const {name}= request.body
    const createTagsUseCase = container.resolve(CreateTagsUseCase)
    const tag = await createTagsUseCase.execute(name)

    return response.json(tag)
    

  }

}

export {CreateTagsController}