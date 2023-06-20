import jwt from "jsonwebtoken"

const auth = async(req,res,next)=>{
    try {
        if(req.headers.authorization){
            let token = req.headers.authorization;
            let decidetoken = jwt.verify(token,"mysecretkey")
            if(decidetoken){
                next();
            }else{
                return res.status(401).json({
                    message:'Invalid token'
                });
            }
        }else{
            return res.status(401).json({
                message:'Invalid token'
            });
        }
    } catch (error) {
        return res.status(401).json({
            message:err.message
        })
    }
}

export default auth;