import { update } from "../../services";
import { Request, Response, NextFunction } from "express";
import { find } from "../../services";

const updateDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const dataCheck = await find(data);
    const email = req.body.email
    const firstname = req.body.fname
    const lastname = req.body.lname

    if (!dataCheck) {
      const dataUpdate = await update(email, firstname, lastname)

      if(dataUpdate){
        res.status(200).json({ msg: "user updated" });
      }
      else{
        res.status(400).json({msg: "db error"})
      }
      
    } else {
      res.status(411).json({ msg: "user already present nothing changed" });
    }
  } catch (error) {
    console.log(`error in creating a new user in db`)
  }
};

export default updateDb