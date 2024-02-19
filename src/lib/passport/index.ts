import passport from "passport"
import { Strategy as JwtStrategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { find } from "../../services";
const key = process.env.SECRET_KEY

const jwtOpts : StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: '123123'
}

const userPassportValidation = passport.use(new JwtStrategy(jwtOpts, async(jwt_payload, done)=>{
    try{
        const user = await find(jwt_payload.email)

        if(!user){
            return done(null, false, {message: '${passport-jwt error} user not found'})
        }

        return done(null, user)
    }catch(error){
        return done(error, false)
    }
}))

export {userPassportValidation} 


