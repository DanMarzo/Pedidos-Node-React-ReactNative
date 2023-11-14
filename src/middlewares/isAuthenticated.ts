import { NextFunction, Request, Response } from "express"
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string
}
export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction) {

    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).end();
    }
    const [_, token] = authToken.split(" ");
    
    try {
        const { sub } = verify(token,process.env.JWT_SECRET) as Payload; 
        //Recuperar o Id do token
        //foi feito Override e config dentro do ts.config
        req.user_id = sub;

    } catch (error) {
        return res.status(401).end()
    }
    return next();
}