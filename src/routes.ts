import  express,{Router} from "express"
import { CreateUserController } from "./module/account/useCases/CreateUsers/CreateUserController"
import { ListUsersController } from "./module/account/useCases/listUsers/listUsersController"
import { CreateTagsController } from "./module/Tags/useCases/createTags/createTagsController"

const createUserController = new CreateUserController()
const lisUsersController = new ListUsersController()

const createTagsController = new CreateTagsController()
const router = Router()
router.use(express.json())



router.get("/users", lisUsersController.handle)
router.post("/user", createUserController.handle )

router.post("/tag", createTagsController.handle )


 export {router}