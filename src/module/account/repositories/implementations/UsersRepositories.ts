import { getRepository, Repository } from "typeorm";
import { IUsersDTO } from "../../dtos/IUsersDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepository implements IUsersRepository {
  private repository:Repository<User>
  constructor(){
    this.repository= getRepository(User)
  }
  async findById(id: string): Promise<User> {
    const user_id = await this.repository.findOne({id});
    return user_id
  }

  async create({ email, name ,id,admin,password}: IUsersDTO): Promise<void> {
    const user = this.repository.create({
      email,
      name,
      id,
      admin,
      password
    })
    await this.repository.save(user)
  }

  async list():Promise<User[]>{
    const users = await this.repository.find()
    return users
  }

  async findByEmail(email:string):Promise<User>{
    const userEmail = await this.repository.findOne({email})
      return userEmail
  }


  

}

export {UsersRepository}