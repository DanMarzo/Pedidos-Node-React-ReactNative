import { httpToken } from "../../infra/axios";
import { Order, OrderDetail } from "../orders/orders.schema";

const obterOrdersServices = async (): Promise<Order[]> => {
    try {
        const response = await httpToken.get("orders")
        return response.data
    } catch (error) {
        throw new Error("Não foi possivel concluir a operacao");
    }
}

const obterOrderDetailServices = async (order_id: string): Promise<OrderDetail> => {
    try {
        const response = await httpToken.get("order/details", { params: { order_id } })
        console.log(response);

        return response.data
    } catch (error) {
        throw new Error("Não foi possivel concluir a operacao");
    }
}

export { obterOrdersServices, obterOrderDetailServices }