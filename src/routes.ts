import  express,{Router} from "express"
import { AuthenticateUserController } from "./module/account/useCases/AutenhicateUser/AuthenticateUserController"
import { CreateUserController } from "./module/account/useCases/CreateUsers/CreateUserController"
import { ListUsersController } from "./module/account/useCases/listUsers/listUsersController"
import { CreateComplimentController } from "./module/compliments/useCases/CreateComplimentController"
import { ListReceivedComplimentsController } from "./module/compliments/useCases/ListReceivedComplimentsController"
import { ListSendComplimentsController } from "./module/compliments/useCases/ListSendComplimentsController"
import { CreateTagsController } from "./module/Tags/useCases/createTags/createTagsController"
import { ListTagsController } from "./module/Tags/useCases/listTags/listTagsController"
import { ensureAdmin } from "./shared/middlewares/ensureAdmin"
import { ensureAuthenticate } from "./shared/middlewares/ensureAuthenticate"

const createUserController = new CreateUserController()
const lisUsersController = new ListUsersController()
const createComplimentsController = new CreateComplimentController()
const listComplimentsController = new ListSendComplimentsController()
const lisReceivedCompliments = new ListReceivedComplimentsController()
const createTagsController = new CreateTagsController()
const authenticateController = new AuthenticateUserController()
const listTagsController = new ListTagsController()

const router = Router()
router.use(express.json())

router.get("/users",ensureAuthenticate, lisUsersController.handle)
router.get("/compliments/send",ensureAuthenticate, listComplimentsController.handle)
router.get("/compliments/received",ensureAuthenticate, lisReceivedCompliments.handle)
router.get("/tags",ensureAuthenticate, listTagsController.handle)

router.post("/user", createUserController.handle )
router.post("/session", authenticateController.handle )
router.post("/tag", ensureAuthenticate, ensureAdmin,createTagsController.handle )
router.post("/compliments", ensureAuthenticate,createComplimentsController.handle )


 export {router}