import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface UserRequest {
    name: string
    email:string
    password: string
}

class CreateUserService {
    async execute({ email, name, password }:UserRequest){
        if(!email){
            throw new Error("Email incorrect");
        }
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        if(userAlreadyExists) {
            throw new Error("Email already exists");
        }
        const passwordHash = await hash(password, 8);
        const user = await prismaClient.user.create(
            {
                data:{email,name,password: passwordHash},
                select:{
                    email: true, name: true, id:true
                }
            })
        return user;
    }
}

export { CreateUserService }