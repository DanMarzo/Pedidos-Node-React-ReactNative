import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(req: Request, res: Response) {
        const { category_id, banner, description, name, price } = req.body;
        const createProductService = new CreateProductService();

        if (!req.file) {
            throw new Error("error upload file");
        }
        else{
            const {originalname,filename} = req.file
            console.log(filename);
            
        }

       const product = await createProductService.execute({ banner, category_id, description, name, price })

       res.json(product)
    }
}
export { CreateProductController }