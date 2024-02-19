import { userSigup } from "../../services";
import { Request, Response, NextFunction } from "express";
import { find } from "../../services";

const signupDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const dataCheck = await find(data);
    
    if (!dataCheck) {
      const newUser = await userSigup(data);

      if(newUser) {
        // success
        res.status(200).json({ msg: "user created" });
      } else {
        // fail response
        res.status(400).json({msg: "db error"})
      }
    } else {
      res.status(411).json({ msg: "user already present login" });
    }
  } catch (error) {
    console.log(`error in creating a new user in db`)
  }
};

export default signupDb