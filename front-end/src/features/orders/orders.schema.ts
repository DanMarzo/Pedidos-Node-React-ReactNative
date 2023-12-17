interface Order {
    id: string,
    name: string,
    table: number,
    status: boolean
    draft?: boolean,
    create_at?: Date
    update_at?: Date
}
interface OrderDetail {
    id: string;
    amount: number;
    create_at: Date;
    update_at: Date;
    order_id: string;
    product_id: string;
    order: Order;
    product: Product
}


export type { Order, OrderDetail }
