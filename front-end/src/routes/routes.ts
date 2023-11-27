import { createBrowserRouter } from "react-router-dom";
import homeRoutes from "./home.routes";
import authRoutes from "./auth.routes";

const routesWeb= createBrowserRouter(
    [...homeRoutes,...authRoutes])

export default routesWeb