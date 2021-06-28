import { inject, injectable } from "tsyringe";
import { IComplimentsRepository } from "../repositories/IComplimentsRepository";
import { Compliments } from "../entities/Compliments";



@injectable()
class ListSendComplimentsUseCase{
  constructor(
    @inject("ComplimentsRepository")
    private complimentRepository: IComplimentsRepository,
  ){}

  async execute(user_sender:string):Promise<Compliments[]>{
    const listCompliment = await this.complimentRepository.listComplimentsSent(user_sender)

    return listCompliment
  }


}

export {ListSendComplimentsUseCase}