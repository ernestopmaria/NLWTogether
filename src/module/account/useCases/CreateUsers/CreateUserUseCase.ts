import {inject,injectable} from "tsyringe"
import { IUsersDTO } from "../../dtos/IUsersDTO"
import { IUsersRepository } from "../../repositories/IUsersRepository"



@injectable()
class CreateUserUseCase{

  constructor
  (
    @inject("UsersRepository")
    private userRepository: IUsersRepository){}

  async execute({email,name,admin}:IUsersDTO):Promise<void>{
  await this.userRepository.create({email,name,admin})
  return
  }
  
}

export {CreateUserUseCase}