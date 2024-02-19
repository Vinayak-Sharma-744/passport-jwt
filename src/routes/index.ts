import express from "express"
import signupAuth from "../auth/signup"
import signupDb from "../controllers/signupDb"
import loginDb from "../controllers/LoginDB"
import loginAuth from "../auth/login"
import passportValidation from "../lib"
import passport from "passport"
import userPassportValidation from "../lib/passport/index"
// import passportValidation from "../lib"
const router = express.Router()

const app = express()
app.use(express.json())

// const verifyUser = passport.authenticate('jwt', {session: false}) 

router.get("/login",passportValidation,loginAuth,loginDb)

router.post("/register",signupAuth, signupDb)

export default router

