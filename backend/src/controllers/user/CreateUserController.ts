import { type Request, type Response, response } from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController {
  async handle (req: Request, res: Response): Promise<any> {
    const { email,name,password} = req.body; 
    const createUserService =  new CreateUserService()

    const user = await createUserService.execute({email,name,password});
    return res.status(200).json(user)
  }
}

export { CreateUserController }
