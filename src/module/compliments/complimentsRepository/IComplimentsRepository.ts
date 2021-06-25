
interface IComplimentRequest{
  tag_id:string;
  user_sender:string;
  user_receiver:string;
  message:string;
}


interface IComplimentsRepository{
  create({message,tag_id,user_receiver,user_sender}:IComplimentRequest):Promise<void>
}

export{IComplimentsRepository, IComplimentRequest}