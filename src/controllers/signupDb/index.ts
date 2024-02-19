import { UserModel } from "../../models";
import express from "express";
import { userSigup } from "../../services";
import { Request, Response, NextFunction } from "express";

const signupDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;
    const dataCheck = await UserModel.findOne(data);
    if (!dataCheck) {
      userSigup(data);
      res.status(200).json({ msg: "user created" });
    } else {
      res.status(411).json({ msg: "user already present login" });
    }
  } catch (error) {
    console.log(`error in creating a new user in db`)
  }
};

export default signupDb