import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req,res,next)=>{
    try{
        const token = req.cookie.jwt;

    if(!token){
        return res.status(401).json({Message:"Unauthrized - No Token Provided" });

    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET)

    if(!decoded){
        return res.status(401).json({Message:"Unauthrized - Invalid Provided" });
    }

    const user = await User.findById(decoded.UserId).select("-password");
    if(!user){
        return res.status(404).json({Message:"User not found" });
    }

    req.user = user;

    next();
}catch(error){
    console.log("Error in protectRoute middleware:",error.message);
    res.status(500).json({Message:"Internal server error" });
}
}