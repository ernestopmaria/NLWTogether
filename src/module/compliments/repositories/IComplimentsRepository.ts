import { Compliments } from "../entities/Compliments";

interface IComplimentRequest{
  tag_id:string;
  user_sender:string;
  user_receiver:string;
  message:string;
}


interface IComplimentsRepository{
  create({message,tag_id,user_receiver,user_sender}:IComplimentRequest):Promise<Compliments>
  listComplimentsSent(user_sender:string):Promise<Compliments[]>
  listComplimentsReceived(user_receiver:string):Promise<Compliments[]>
}

export{IComplimentsRepository, IComplimentRequest}