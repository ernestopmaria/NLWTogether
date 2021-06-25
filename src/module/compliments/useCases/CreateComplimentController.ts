import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateComplimentUseCase } from "./CreateComplimentUseCase";


class CreateComplimentController{

  async handle(request:Request, response:Response):Promise<Response>{
   const{message, tag_id, user_receiver, user_sender}= request.body
    const complimentUseCase = container.resolve(CreateComplimentUseCase)

    const compliment = await complimentUseCase.execute({
      message,
      tag_id,
      user_receiver,
      user_sender
    })
    return response.json({compliment})

  }
}

export {CreateComplimentController}