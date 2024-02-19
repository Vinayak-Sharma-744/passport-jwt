import { UserModel } from "../models/index";
const userSigup = async (obj: any) => {
  try {
    const result = await UserModel.create(obj);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const login = async (id: any) => {
  try {
    const result = await UserModel.findOne(id);
    return result;
    //   console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export{userSigup, login}