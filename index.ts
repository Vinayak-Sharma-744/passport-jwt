import express from "express"
import router from "./src/routes/index"
import { connect } from "mongoose"
import dotenv from "dotenv"
import passport from "passport"
import passportValidation from "./src/lib"
dotenv.config()

const app = express()
const port = process.env.PORT
app.use( express.json())

app.use(passport.initialize())



app.use(router)
const serverConnect = async()=>{
    try {
        await connect(process.env.MONGO_URL as string)
        app.listen(port, ()=>{console.log("listening on port: ", port )})
    } catch (error) {
        console.log(`error connecting to server: ${error}`)
    }
}
serverConnect()
