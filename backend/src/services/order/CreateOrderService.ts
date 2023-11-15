import prismaClient from "../../prisma";

interface OrderRequest {
    table: number;
    name: string
}

class CreateOrderService {
    async execute({ name, table }: OrderRequest) {
        const order = await prismaClient.order.create({ data: { table, name }, select: { id: true, name: true, table: true, status: true } })
        console.log(order);
        
        return order;
    }
}
export { CreateOrderService }