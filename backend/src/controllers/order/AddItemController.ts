import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController {
    async handle(req: Request, res: Response) {
        const { order_id, product_id, amount } = req.body;
        const addItem = new AddItemService()
        const items = await addItem.execute({ amount, order_id, product_id })
        return res.json(items)
    }
}
export{AddItemController}
