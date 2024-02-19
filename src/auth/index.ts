import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { find, userSigup } from "../services";



const signupAuth = async(req: Request , res: Response, next:NextFunction)=>{
    try {
        const data = req.body
        const email = req.body.email
    const isUserpresent = await find({email:email})

    if (! isUserpresent) {
        console.log('key: ', process.env.JWT_KEY)
       
        const token = jwt.sign(email, process.env.JWT_KEY as string)
        console.log(token);

        const newUser = await userSigup(data);
        if(newUser) {
            // success
            res.status(200).json({ msg: "user created", token:token });
        } else {
            // fail response
            res.status(400).json({msg: "db error"})
        }
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