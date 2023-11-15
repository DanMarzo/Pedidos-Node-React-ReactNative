import prismaClient from "../../prisma";

interface OrderRequest {
    order_id: string;
    product_id: string;
    amount: number
}

class AddItemService {
    async execute({ amount, order_id, product_id }: OrderRequest) {
        const order = await prismaClient.orderItem.create({
            data: { order_id, amount, product_id }
        })
        return order;
    }
}
export { AddItemService }