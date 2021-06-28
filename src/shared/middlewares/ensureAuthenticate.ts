import { NextFunction, Request, Response } from "express";
import {verify} from 'jsonwebtoken'

interface IPayload{
  sub:string
}

export async function ensureAuthenticate(request:Request, response:Response, next:NextFunction){
  const authtoken=request.headers.authorization

  if(!authtoken){
    return response.status(401).end()
  }
  const [, token] = authtoken.split(" ")
  try{
  const {sub} = verify(token,"eyJhbGciOiJIUzI1NiJ9.e30.0R8eJN6-7m1rgniq4tbOmouE8kK2uDZllFrDIR_opzY") as IPayload

  request.user_id = sub;
  return next()
  }catch(err){
    return response.status(401).end()
  }

  
  
 
} 