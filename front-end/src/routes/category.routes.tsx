import { RouteObject } from "react-router-dom";
import { categoryWebRoutes } from "./webRoutes";

const categoryRoutes: RouteObject[] = [
  {
    path: categoryWebRoutes.categorias,
    async lazy() {
      let Category = await import("../features/category/index");
      return { Component: Category.default };
    },
  },
];

export default categoryRoutes;
