import "reflect-metadata";
import './shared/container'
import "./database"
import express, { NextFunction, Request, Response } from "express"
import 'express-async-errors'
import { router } from "./routes"
import { AppError } from "./shared/AppError/AppError";


const app = express()
app.use(router)
app.use((err:Error, request:Request, response:Response, next:NextFunction)=>{
  if(err instanceof AppError){
      return response.status(err.statusCode).json({
          message:err.message})
  }
  return response.status(500).json({
      status:"error",
      message:`internal server error -${err.message}`
  })

})
export {app}