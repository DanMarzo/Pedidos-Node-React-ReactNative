import { Router, Response, Request } from "express"
import { CreateUserController } from "./controllers/user/CreateUserController"
import { AuthUserController } from "./controllers/user/AuthUserController"
import { DetailUserController } from "./controllers/user/DetailsUserController"
import { isAuthenticated } from "./middlewares/isAuthenticated"
import { CreateCategoryController } from "./controllers/category/CreateCategoryController"

const router = Router()

// Rotas user
router.post("/users", new CreateUserController().handle)

router.post("/session", new AuthUserController().handle)

router.get("/me", isAuthenticated, new DetailUserController().handle)

//Rotas category

router.post("/category", isAuthenticated, new CreateCategoryController().handle)


export{router}