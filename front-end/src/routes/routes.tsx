import { createBrowserRouter } from "react-router-dom";
import homeRoutes from "./home.routes";
import authRoutes from "./auth.routes";
import Redirect from "../features/layout/Redirect";

const routesWeb = createBrowserRouter([
  {
    path: "/",
    element: <Redirect />,
  },
  ...homeRoutes,
  ...authRoutes,
]);

export default routesWeb;
