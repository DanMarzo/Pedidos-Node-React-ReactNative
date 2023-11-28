import { createBrowserRouter } from "react-router-dom";
import homeRoutes from "./home.routes";
import authRoutes from "./auth.routes";
import Redirect from "../features/layout/Redirect";
import LayoutApp from "../features/layout";

const routesWeb = createBrowserRouter([
  {
    path: "/",
    element: <Redirect />,
  },
  {
    element: <LayoutApp />,
    children: [...homeRoutes, ...authRoutes],
  },
]);

export default routesWeb;
