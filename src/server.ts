import express from "express"

const app = express()
app.use(express.json())
app.get("/test", (request, response)=>{
 return response.json({message:"testando uma rota"})
})
app.get("/test", (request, response)=>{
  return response.json({message:"testando uma rota"})
 })
app.listen(3333, ()=>{
  console.log("Server is running on port 3333!!")
})