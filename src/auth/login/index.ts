import * as jwt from "jsonwebtoken";
import { UserModel } from "../../models/index";
import { Request, Response, NextFunction } from "express";
// const key = process.env.JWT_KEY as string
const key = '123123'

const loginAuth = (req: Request , res:Response, next:NextFunction)=>{
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ msg: "invalid token in header or token not present" });
    }
    else{
        try {
            const decoded = jwt.verify(token, key);
            console.log("decoded : ",decoded );
            
            next();
        } catch (error) {
            return res.status(403).json({ ErrMsg: `Invalid token, ${error}`, msg: "please signUp" });
        }
    }

    
}

export default loginAuth