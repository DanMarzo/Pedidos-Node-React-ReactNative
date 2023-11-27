import { http } from "../../../infra/axios";
import { UserProps } from "./Login.schemas";

const LoginService = async (body: UserProps) =>{
    try {
        console.log(body);
        
        const response = await http.post("/session", body)
        return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log(error);
        if(error.response.data){
        throw new Error(error.response.data.error);    
        }
        throw new Error(error.message);
        
    }
}

export {LoginService}