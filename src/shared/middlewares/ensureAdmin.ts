import { NextFunction, Request, Response } from "express";
import { UsersRepository } from "../../module/account/repositories/implementations/UsersRepositories";
import { AppError } from "../AppError/AppError";



export async function ensureAdmin(request:Request, response:Response, next:NextFunction) {
   const {user_id}=request

   const usersRepository = new UsersRepository()
   const user = await usersRepository.findById(user_id)
 
    if(!user.admin){
      throw new AppError("Unauthorized")
    }
    return next()
  
}