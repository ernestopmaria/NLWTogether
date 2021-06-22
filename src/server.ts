import "reflect-metadata";
import './container'
import "./database"
import express from "express"
import { router } from "./routes"


const app = express()
app.use(router)


app.listen(3333, ()=>{
  console.log("Server is running on port 3333!!")
})