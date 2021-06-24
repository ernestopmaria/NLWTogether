import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../../module/account/repositories/implementations/UsersRepositories";
import { AppError } from "../AppError/AppError";



export async function ensureAdmin(request:Request, response:Response, next:NextFunction) {
   // const {id}=request.user
   const admin =false
    //const userRepository= new UsersRepository()
    //const user= await userRepository.findById(id)

    if(!admin){
      throw new AppError("user is not admin")
    }
    return next()
  
}