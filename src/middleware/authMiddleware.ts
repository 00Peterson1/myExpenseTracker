const jwt  = require("jsonwebtoken");

const JWT_SECRET = "petersonlabs_portfolio"


function authMiddleware(req:any, res: any, next:any) {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({success: false, message: "No token provided"})
        return
    }

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded
        next()
    } catch (error: any) {
        res.status(401).json({success: false, message: "Invalid token"})
    }

}

module.exports = authMiddleware