import userPassportValidation from "./passport";

 const passportValidation = userPassportValidation.authenticate('jwt', {session:false})

 export default passportValidation