import { classToPlain } from "class-transformer";
import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";



@injectable()
class ListUsersUserCase{
  constructor(
    @inject("UsersRepository")
    private usersRepository:IUsersRepository
  ){}

  async execute():Promise<User[]>{
      const users = await this.usersRepository.list()

      return classToPlain(users) as User[]
  }


}

export {ListUsersUserCase}