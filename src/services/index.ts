import { UserModel } from "../models/index";
const userSigup = async (obj: any) => {
  try {
    const result = await UserModel.create(obj);
    return result;
  } catch (error) {
    console.log(error);
  }
};

const login = async (email: string) => {
  try {
    const result = await UserModel.findOne({email:email});
    return result;
    //   console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const update = async(email: string, firstName:string, lastName:string)=>{
  const updatee = {
    fname: firstName,
    lname: lastName
  };
  const options = {
    new: true, // Return the updated document
    runValidators: true // Validate the update
  };
  try {
    const result = await UserModel.findOneAndUpdate({email:email}, updatee, options)
    return result
  }catch(error){
    console.log(error);
  }
}

const find = async (obj:object) => {
  try {
    const result = await UserModel.findOne(obj);
    return result;
    //   console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export{userSigup, login, update, find}