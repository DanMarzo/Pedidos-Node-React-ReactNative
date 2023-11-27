/* eslint-disable prefer-const */
import { RouteObject } from "react-router-dom";
import { authWebRoutes } from "./webRoutes";

const authRoutes: RouteObject[] = [
    {
        path: authWebRoutes.auth,
        async lazy() {
            let LayoutAuth = await import("../features/auth");
            return { Component: LayoutAuth.default };
        },
        children: [
            {
                path: authWebRoutes.login,
                async lazy() {
                    let LoginPage = await import("../features/auth/LoginPage");
                    return { Component: LoginPage.default };
                },
            },
            {
                path: authWebRoutes.signUp,
                async lazy() {
                    let SignUpPage = await import("../features/auth/SignUpPage");
                    return { Component: SignUpPage.default };
                },
            }
        ]
    },
]

export default authRoutes