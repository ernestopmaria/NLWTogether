import { getRepository, Repository } from "typeorm";
import { Compliments } from "../../entities/Compliments";
import { IComplimentRequest, IComplimentsRepository } from "../IComplimentsRepository";


class ComplimentsRepository implements IComplimentsRepository{
  private repository:Repository<Compliments>
  constructor(){
    this.repository=getRepository(Compliments)
  }
  async create({ message, tag_id, user_receiver,user_sender}: IComplimentRequest):Promise<Compliments>{
    const compliment = this.repository.create({
      message,
      user_receiver,
      tag_id,
      user_sender

      })
  const compliments = await this.repository.save(compliment)

  return compliments
   
  }

  async listComplimentsSent(user_sender:string): Promise<Compliments[]> {
    const compliments = await this.repository.find({
      where:{user_sender},
      relations:["tag","userSender","userReceiver"]
    })
    return compliments
  }

  async listComplimentsReceived(user_receiver:string): Promise<Compliments[]> {
    const compliments = await this.repository.find({
      where:{user_receiver},
      relations:["tag","userSender","userReceiver"]
    })
    return compliments

  }



}
export{ComplimentsRepository}