import { http } from "../../../infra/axios";
import { UserProps, UserPropsResponse } from "../auth.schema";


const LoginService = async (body: UserProps) :Promise<UserPropsResponse>=>{
    try {
        const response = await http.post("/session", body)
        return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if(error.response.data){
        throw new Error(error.response.data.error);    
        }
        throw new Error(error.message);
        
    }
}

export {LoginService}