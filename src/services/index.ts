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

const update = async(obj: any, firstName:string, lastName:string)=>{
  const updatee = {
    fname: firstName,
    lname: lastName
  };
  const options = {
    new: true, // Return the updated document
    runValidators: true // Validate the update
  };
  try {
    const result = await UserModel.findOneAndUpdate({email:obj}, updatee, options)
    return result
  }catch(error){
    console.log(error);
  }
}

export{userSigup, login, update}