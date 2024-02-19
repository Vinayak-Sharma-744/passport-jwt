import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String
})

export const UserModel = mongoose.model("Test_User", UserSchema)