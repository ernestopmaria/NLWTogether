import { compare } from "bcryptjs"
import {sign} from 'jsonwebtoken'
import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/AppError/AppError"
import { IUsersRepository } from "../../repositories/IUsersRepository"


interface IAuthenticateRequest{
email:string,
password:string
}

interface IResponse {
  user: {
      name: string,
      email: string
  },
  token: string
}

@injectable()
class AuthenticateUserUseCase{
  constructor(
    @inject("UsersRepository")
    private userRepository:IUsersRepository
  ){}

  async execute({email,password}:IAuthenticateRequest):Promise<IResponse>{
    if(!email){
      throw new AppError("Incorrect email")
    }
    const user = await this.userRepository.findByEmail(email)
    if(!user){
      throw new AppError("Email/Password incorrect")
    }
    const passwordMatch = await compare(password, user.password)
    if(!passwordMatch){
      throw new AppError("Email/Password incorrect")
    }

    const token =sign({email},"eyJhbGciOiJIUzI1NiJ9.e30.0R8eJN6-7m1rgniq4tbOmouE8kK2uDZllFrDIR_opzY",{
      subject:user.id,
      expiresIn:"1d"
    } )

    const userToken:IResponse={
      user:{
        name:user.name,
        email:user.email
      },
      token
    }

    return userToken

    

  }


}

export {AuthenticateUserUseCase}