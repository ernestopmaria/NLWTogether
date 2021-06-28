import  express,{Router} from "express"
import { AuthenticateUserController } from "./module/account/useCases/AutenhicateUser/AuthenticateUserController"
import { CreateUserController } from "./module/account/useCases/CreateUsers/CreateUserController"
import { ListUsersController } from "./module/account/useCases/listUsers/listUsersController"
import { CreateComplimentController } from "./module/compliments/useCases/CreateComplimentController"
import { ListReceivedComplimentsController } from "./module/compliments/useCases/ListReceivedComplimentsController"
import { ListSendComplimentsController } from "./module/compliments/useCases/ListSendComplimentsController"
import { CreateTagsController } from "./module/Tags/useCases/createTags/createTagsController"
import { ensureAdmin } from "./shared/middlewares/ensureAdmin"
import { ensureAuthenticate } from "./shared/middlewares/ensureAuthenticate"

const createUserController = new CreateUserController()
const lisUsersController = new ListUsersController()
const createComplimentsController = new CreateComplimentController()
const listComplimentsController = new ListSendComplimentsController()
const lisReceivedCompliments = new ListReceivedComplimentsController()
const createTagsController = new CreateTagsController()
const authenticateController = new AuthenticateUserController()

const router = Router()
router.use(express.json())

router.get("/users", lisUsersController.handle)
router.get("/compliments/send",ensureAuthenticate, listComplimentsController.handle)
router.get("compliments/received",ensureAuthenticate, lisReceivedCompliments.handle)

router.post("/user", createUserController.handle )
router.post("/session", authenticateController.handle )
router.post("/tag", ensureAuthenticate, ensureAdmin,createTagsController.handle )
router.post("/compliments", ensureAuthenticate,createComplimentsController.handle )


 export {router}