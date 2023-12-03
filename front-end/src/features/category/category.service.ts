import { httpToken } from "../../infra/axios";
import { CreateCategory } from "./category.schemas";

const createCategoryService = async (body: CreateCategory): Promise<boolean> => {
    try {
        const response = await httpToken.post("category", body);
        if (response.status == 200) {
            return true
        }
        else {
            return false
        }
    } catch (error) {
        console.log(error);
        
        throw new Error("Erro desconhecido");

    }
}

export {createCategoryService}