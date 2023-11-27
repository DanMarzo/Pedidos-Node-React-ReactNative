/* eslint-disable prefer-const */
import { RouteObject } from "react-router-dom";
import { authWebRoutes } from "./webRoutes";

const authRoutes: RouteObject[] = [
    {
        path: authWebRoutes.login,
        async lazy() {
            let AutPage = await import("../features/auth");
                return { Component: AutPage.default };
            }
    },
]

export default authRoutes