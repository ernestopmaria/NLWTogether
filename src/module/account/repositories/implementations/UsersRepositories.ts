import { getRepository, Repository } from "typeorm";
import { IUsersDTO } from "../../dtos/IUsersDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepository implements IUsersRepository {
  private repository:Repository<User>
  constructor(){
    this.repository= getRepository(User)
  }

  async create({ email, name ,id,admin}: IUsersDTO): Promise<void> {
    const user = this.repository.create({
      email,
      name,
      id,
      admin,
    })
    await this.repository.save(user)
  }

  async list():Promise<User[]>{
    const users = await this.repository.find()
    return users
  }


  

}

export {UsersRepository}