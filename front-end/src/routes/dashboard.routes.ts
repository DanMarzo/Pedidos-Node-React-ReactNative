import { RouteObject } from "react-router-dom";
import { dashboardWebRoutes } from "./webRoutes";

const dashboardPageRoutes: RouteObject[] = [
    {
        path: dashboardWebRoutes.dashboard,
        async lazy() {
            const DashboardPage = await import("../features/dashboard");
                return { Component: DashboardPage.default };
            }
    },
]

export default dashboardPageRoutes