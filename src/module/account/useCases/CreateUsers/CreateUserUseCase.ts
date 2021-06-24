import { hash } from "bcryptjs"
import {inject,injectable} from "tsyringe"
import { AppError } from "../../../../shared/AppError/AppError"
import { IUsersDTO } from "../../dtos/IUsersDTO"
import { IUsersRepository } from "../../repositories/IUsersRepository"



@injectable()
class CreateUserUseCase{

  constructor
  (
    @inject("UsersRepository")
    private userRepository: IUsersRepository){}

  async execute({email,name,admin,password}:IUsersDTO):Promise<void>{
    const userExists = await this.userRepository.findByEmail(email)
    if(!email){
      throw new AppError("Incorrect email!",400)
    }
    if(userExists){
       throw new AppError("This email is already in use!",400)
     }
  
     const passwordHash = await hash(password,8)
      await this.userRepository.create({email,name,admin,password:passwordHash})
      return

  }
  
}

export {CreateUserUseCase}