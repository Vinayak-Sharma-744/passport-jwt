import { Request, Response, NextFunction } from "express";
import{login} from '../../services/index'
import * as jwt  from "jsonwebtoken";


const loginDb = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email
  try {

    const data = await login(req.body.email);
    if (!data) {

        res.status(500).json({ msg: "user not present in db" });

    } else {

    const token = jwt.sign(email, process.env.JWT_KEY as string)
    console.log(token);
    res.status(200).json({data: data,token:token})


    }
    // next()
  } catch (error) {
    console.log(`error in loginDb`)
  }

};

export default loginDb