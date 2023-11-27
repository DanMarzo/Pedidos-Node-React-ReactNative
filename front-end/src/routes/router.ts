/* eslint-disable prefer-const */
import { createBrowserRouter } from "react-router-dom";
import { authWebRoutes } from "./webRoutes";

const Routes = createBrowserRouter([
    {
        path: authWebRoutes.login,
        async lazy() {
            let AutPage = await import("../features/auth");
                return { Component: AutPage.default };
            }
    },
    {

    }
])

export default Routes