import { getRepository, Repository } from "typeorm";
import { Compliments } from "../../entities/Compliments";
import { IComplimentRequest, IComplimentsRepository } from "../IComplimentsRepository";


class ComplimentsRepository implements IComplimentsRepository{
  private repository:Repository<Compliments>
  constructor(){
    this.repository=getRepository(Compliments)
  }
  async create({ message, tag_id, user_receiver,user_sender}: IComplimentRequest){
    const compliment = this.repository.create({
      message,
      user_receiver,
      tag_id,
      user_sender

      })
   await this.repository.save(compliment)
   
  }



}
export{ComplimentsRepository}