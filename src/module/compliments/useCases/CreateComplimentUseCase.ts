import { inject, injectable } from "tsyringe";
import { AppError } from "../../../shared/AppError/AppError";
import { IUsersRepository } from "../../account/repositories/IUsersRepository";
import { IComplimentRequest, IComplimentsRepository } from "../complimentsRepository/IComplimentsRepository";
import { Compliments } from "../entities/Compliments";



@injectable()
class CreateComplimentUseCase{
  constructor(
    @inject("ComplimentsRepository")
    private complimentsRepository : IComplimentsRepository,

    @inject("UsersRepository")
    private userRepository:IUsersRepository
  )
  {}

  async execute({message,tag_id,user_receiver,user_sender}:IComplimentRequest):Promise<Compliments>{
    if(user_sender===user_receiver){
      throw new AppError("Incorrect user receiver")
    }
    const userReceiverExists = await this.userRepository.findById(user_receiver)
    if(!userReceiverExists){
      throw new AppError("Users Receiver does not exists")
    }

    const compliments = await this.complimentsRepository.create({
      message,tag_id,user_receiver,user_sender
    })

    return compliments
  }

}

export{CreateComplimentUseCase}