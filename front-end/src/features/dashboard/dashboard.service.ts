import { httpToken } from "../../infra/axios";
import { Orders } from "../orders/orders.schema";

const obterOrdersServices = async (): Promise<Orders[]> => {
    try {
        const response = await httpToken.get("orders")
        return response.data
    } catch (error) {
        throw new Error("Não foi possivel concluir a operacao");
    }
}

export { obterOrdersServices }