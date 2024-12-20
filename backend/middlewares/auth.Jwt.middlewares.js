const jwt = require("jsonwebtoken");

verifyToken = (req, res, next)=>{
    const token = req.headers["x-access-token"];
    if (!token){
        return res.status(401).json({ message:"Token is misseing"});
    }
    jwt.verify(token,secret,(err,decode)=>{
        if (err) return res.status(403).json({message:"Access Forbidden!!"});
        req.userId = decode.id;
        req.username = decode.username;
        next();
    });
};

const authJwt = {
    verifyToken,
};
module.exports = authJwt;