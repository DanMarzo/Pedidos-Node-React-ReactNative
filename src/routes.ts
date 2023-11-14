import { Router, Response, Request } from "express"
import { CreateUserController } from "./controllers/user/CreateUserController"
import { AuthUserController } from "./controllers/user/AuthUserController"
import { DetailUserController } from "./controllers/user/DetailsUserController"
import { isAuthenticated } from "./middlewares/isAuthenticated"

const router = Router()

// Rotas user
router.post("/users", new CreateUserController().handle)

router.post("/session", new AuthUserController().handle)

router.get("/me", isAuthenticated, new DetailUserController().handle)


export{router}