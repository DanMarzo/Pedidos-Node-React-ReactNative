import { RouteObject } from "react-router-dom";

const homeRoutes: RouteObject[] = [
    {
        path: "/home",
        async lazy() {
            const HomePage = await import("../features/home/");
                return { Component: HomePage.default };
            }
    },
]

export default homeRoutes