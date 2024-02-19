import express from "express"
import signupAuth from "../auth/"
import loginDb from "../controllers/LoginDB"
import passportValidation from "../lib"
import updateDb from "../controllers/updateDB"
const router = express.Router()


router.get("/login",loginDb)

router.post("/register",signupAuth)

router.put("/user", passportValidation, updateDb )

export default router

