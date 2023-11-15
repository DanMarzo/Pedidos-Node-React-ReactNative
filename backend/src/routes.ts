import { Router, Response, Request } from "express"
import { CreateUserController } from "./controllers/user/CreateUserController"
import { AuthUserController } from "./controllers/user/AuthUserController"
import { DetailUserController } from "./controllers/user/DetailsUserController"
import { isAuthenticated } from "./middlewares/isAuthenticated"
import { CreateCategoryController } from "./controllers/category/CreateCategoryController"
import { ListCategoryController } from "./controllers/category/ListCategoryController"
import { CreateProductController } from "./controllers/product/CreateProductController"
import multer from "multer"
import uploadConfig from "./config/multer"
import { ListByCategoryController } from "./controllers/product/ListByCategoryController"
import { CreateOrderController } from "./controllers/order/CreateOrderController"
import { RemoveOrderController } from "./controllers/order/RemoveOrderController"
import { AddItemController } from "./controllers/order/AddItemController"
import { RemoveItemController } from "./controllers/order/RemoveItemController"
import { SendOrderController } from "./controllers/order/SendOrderController"
import { ListOrdersController } from "./controllers/order/ListOrdersController"

const router = Router()

const upload = multer(uploadConfig.upload("./tmp"))
// Rotas user
router.post("/users", new CreateUserController().handle)

router.post("/session", new AuthUserController().handle)

router.get("/me", isAuthenticated, new DetailUserController().handle)

//Rotas category

router.post("/category", isAuthenticated, new CreateCategoryController().handle)

router.get("/category", isAuthenticated, new ListCategoryController().handle)

//Product
router.post("/product", isAuthenticated, upload.single("file"), new CreateProductController().handle)
router.get("/category/product", isAuthenticated, new ListByCategoryController().handle)

//Order
router.post("/order", isAuthenticated, new CreateOrderController().handle)
router.delete("/order", isAuthenticated, new RemoveOrderController().handle)
router.post("/order/add", isAuthenticated, new AddItemController().handle)
router.delete("/order/remove_item", isAuthenticated, new RemoveItemController().handle)
router.patch("/order/send_order", isAuthenticated, new SendOrderController().handle)
router.get("/orders", isAuthenticated, new ListOrdersController().handle)
export{router}