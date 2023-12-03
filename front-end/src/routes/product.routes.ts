import { RouteObject } from "react-router-dom";
import { productWebRoutes } from "./webRoutes";

const productRoutes: RouteObject[] = [
    {
        path: productWebRoutes.products,
        async lazy() {
            const ProductsPage = await import("../features/product/index");
                return { Component: ProductsPage.default };
            }
    },
]

export default productRoutes