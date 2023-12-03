import { createBrowserRouter } from "react-router-dom";
import homeRoutes from "./home.routes";
import authRoutes from "./auth.routes";
import Redirect from "../features/layout/Redirect";
import LayoutApp from "../features/layout";
import ValidateToken from "../features/layout/ValidateToken";
import NotFound from "../shared/components/NotFound/NotFound";

const routesWeb = createBrowserRouter([
  {
    path: "/",
    element: <Redirect />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    element: (
      <ValidateToken>
        <LayoutApp />
      </ValidateToken>
    ),
    children: [...homeRoutes],
  },
  ...authRoutes,
]);

export default routesWeb;
