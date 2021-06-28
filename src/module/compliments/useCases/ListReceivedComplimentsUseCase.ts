import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../account/repositories/IUsersRepository";
import { IComplimentsRepository } from "../repositories/IComplimentsRepository";
import { Compliments } from "../entities/Compliments";



@injectable()
class ListReceivedComplimentsUseCase{
  constructor(
    @inject("ComplimentsRepository")
    private complimentRepository: IComplimentsRepository,
  ){}

  async execute(user_receiver:string):Promise<Compliments[]>{
    const listReceivedCompliment = await this.complimentRepository.listComplimentsReceived(user_receiver)

    return listReceivedCompliment

  }


}

export {ListReceivedComplimentsUseCase}