import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuidV4} from 'uuid'
import { User } from "../../account/entities/User";
import { Tag } from "../../Tags/entities/Tag";

@Entity("compliments")
class Compliments{

  @PrimaryColumn("uuid")
  id:string

 @Column()
  user_sender:string

  @JoinColumn({name:"user_sender"})
  @ManyToOne(()=>User)
  userSender:User

  @Column()
  user_receiver:string

  @JoinColumn({name:"user_receiver"})
  @ManyToOne(()=>User)
  userReceiver:User

  @Column()
  tag_id:string

  @JoinColumn({name:"tag_id"})
  @ManyToOne(()=>Tag)
  tag:Tag 

  @Column()
  message:string

  @CreateDateColumn()
  created_at:Date

  constructor(){
    if(!this.id){
      this.id= uuidV4()
    }
  }


}

export {Compliments}