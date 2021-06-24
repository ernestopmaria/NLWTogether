import  express,{Router} from "express"
import { AuthenticateUserController } from "./module/account/useCases/AutenhicateUser/AuthenticateUserController"
import { CreateUserController } from "./module/account/useCases/CreateUsers/CreateUserController"
import { ListUsersController } from "./module/account/useCases/listUsers/listUsersController"
import { CreateTagsController } from "./module/Tags/useCases/createTags/createTagsController"
import { ensureAdmin } from "./shared/middlewares/ensureAdmin"

const createUserController = new CreateUserController()
const lisUsersController = new ListUsersController()

const createTagsController = new CreateTagsController()
const authenticateController = new AuthenticateUserController()
const router = Router()
router.use(express.json())



router.get("/users", lisUsersController.handle)
router.post("/user", createUserController.handle )
router.post("/session", authenticateController.handle )
router.post("/tag", ensureAdmin,createTagsController.handle )


 export {router}