import  express,{Router} from "express"
import { CreateUserController } from "./useCases/CreateUserController"

const createUserController = new CreateUserController()
const router = Router()
router.use(express.json())



router.get("/test", (request, response)=>{
 return response.json()
})
router.post("/test", createUserController.handle )

 export {router}