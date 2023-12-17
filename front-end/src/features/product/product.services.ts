import { httpToken } from "../../infra/axios";

const createProductService = async (body: any) => {
    try {
        console.log(body);
        
        const { category_id, name, price, description, fileImage: file } = body
        
        const data = new FormData();

        if (file == undefined) {
            throw new Error("É obrigatório");
        }
        
        data.append('name', name);
        data.append('price', price);
        data.append('description', description);
        data.append('category_id', category_id);
        data.append('file', file[0].originFileObj);

        const response = await httpToken.post("product", data,)
        if (response.status == 200) {
            return true
        }
    } catch (error:any) { 
        throw new Error("Erro desconhecido");
    }
}

export { createProductService }