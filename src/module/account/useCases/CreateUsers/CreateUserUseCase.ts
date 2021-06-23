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
    if(!email){
      throw new Error("Incorrect email!")
    }
    const userExists = await this.userRepository.findByEmail(email)
     
    if(userExists){
       throw new Error("This email is already in use!")
     }
  

      await this.userRepository.create({email,name,admin})
      return

  }
  
}

export {CreateUserUseCase}