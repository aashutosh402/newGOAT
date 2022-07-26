// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// const ErrorResponse = require("../utlis/errorresponse");
// exports.protect = async (req, res, next) => {
//   let token;
//   if (
//     req.headers.authorization 
//   ) {
//     token = req.headers.authorization
//   }
//   if(!token){
//     return next(new ErrorResponse("not authorized to access this route",401))
//   }
//   try {
//       const decoded=jwt.verify(token,process.env.JWT_SECRET)
//         const  user =await User.findById(decoded.id);
//         if(!user){
//             return next(new ErrorResponse("no user found with this id",404)
//              )

//         }
//         req.user=user
//         next()
//   } catch (error) {
//     return next(new ErrorResponse("not authoriser to acces this router last ",404))
//   }
// };
module.exports = thefun => (req, res, next) => {
    Promise.resolve(thefun(req, res, next)).catch(next);
}