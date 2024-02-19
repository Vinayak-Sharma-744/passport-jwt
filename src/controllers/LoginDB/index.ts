import { UserModel } from "../../models";
import express from "express";
import { userSigup } from "../../services";
import { Request, Response, NextFunction } from "express";

const loginDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await UserModel.find();
    if (!data) {
        res.status(500).json({ msg: "user not present in db" });
    } else {
     res.status(200).json(data)
    }
    next()
  } catch (error) {
    console.log(`error in loginDb`)
  }

};

export default loginDb