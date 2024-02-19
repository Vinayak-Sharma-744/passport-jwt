import * as jwt from "jsonwebtoken";
import { UserModel } from "../../models/index";
import { Request, Response, NextFunction } from "express";

// const key = process.env.JWT_KEY as string
const key = '123123'

const signupAuth = async(req: Request , res: Response, next:NextFunction)=>{
    try {
        const email = req.body.email
    const isUserpresent = await UserModel.findOne({email:email})

    if (! isUserpresent) {
        const token = jwt.sign(email, key)
        console.log(token);
    } else {
        res
        .status(411)
        .json({
          ErrMsg: `user found`,
          mes: "user already exists go to login",
        });
    }
    next()
    } catch (error) {
        console.log(`signup Auth error ${error}`);
        
    }
}

export default signupAuth