import  express,{Router} from "express"
import { CreateUserController } from "./module/account/useCases/CreateUsers/CreateUserController"
import { ListUsersController } from "./module/account/useCases/listUsers/listUsersController"

const createUserController = new CreateUserController()
const lisUsersController = new ListUsersController()
const router = Router()
router.use(express.json())



router.get("/test", lisUsersController.handle)
router.post("/test", createUserController.handle )

 export {router}