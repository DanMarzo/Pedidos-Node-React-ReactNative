
interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string
}
class CreateProductService {
    async execute({banner,category_id,description,name,price}:ProductRequest) {
        console.log(category_id);
        
        return {ok: true}
    }
}
export{CreateProductService}