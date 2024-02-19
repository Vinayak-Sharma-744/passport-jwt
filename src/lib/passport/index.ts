import passport from "passport"
import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import {UserModel} from "../../models/index";
const key = process.env.SECRET_KEY

const jwtOpts : StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: '123123'
}

const userPassportValidation = passport.use(new JwtStrategy(jwtOpts, async(jwt_payload, done)=>{
    try{
        const user = await UserModel.findOne({username: jwt_payload.username})

        if(!user){
            return done(null, false, {message: '{passport-jwt error} user not found'})
        }

        return done(null, user)
    }catch(error){
        return done(error, false)
    }
}))

export default userPassportValidation


