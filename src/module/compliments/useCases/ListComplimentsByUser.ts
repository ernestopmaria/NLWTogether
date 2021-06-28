import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../account/repositories/IUsersRepository";
import { IComplimentsRepository } from "../complimentsRepository/IComplimentsRepository";
import { Compliments } from "../entities/Compliments";



@injectable()
class ListComplimentsByUser{
  constructor(
    @inject("ComplimentsRepository")
    private complimentRepository: IComplimentsRepository,
  ){}

  async execute(user_sender:string):Promise<Compliments[]>{
    const listCompliment = await this.complimentRepository.listComplimentsSent(user_sender)
    return listCompliment
  }


}

export {ListComplimentsByUser}