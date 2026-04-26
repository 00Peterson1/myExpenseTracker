import { success } from "zod";

const { createUser, findUserByEmail, verifyPassword } = require("../services/UserService");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "petersonlabs_portfolio";

async function register( req: any, res:any ){
    try {
        const { email, password} = req.body;

        if(!email || !password) {
            res.status(400).json({success:false, message: "Email and Password required"});
            return;
        }
        const existingUser = await findUserByEmail(email)
            if(existingUser) {
                res.status(400).json({success: false, message: "Email already registered"});
                return;
            }
        const user = await createUser(email, password)

        res.status(201).json({success: true, data:user})
    } catch (error: any) 
    {
        console.error("Register Error: ", error.message);
        res.status(500).json({success: false, message: "Server error"})
    }
}

async function login (req:any, res:any) {
    try {
        const {email, password} = req.body;

        if(!email || !password){
            res.status(400).json({success: false, message: "Email and Password Required"});
            return;
        }

        const user = await findUserByEmail(email) 
            if (!user) {
                res.status(401).json({success: false, message: "Invalid Credentials"})
                return;
            }

            const passwordMatch = await verifyPassword(password, user.password) 
                if(!passwordMatch) {
                    res.status(401).json({success:false, message: "Invalid credentials"});
                    return;
                }
            
            const token = jwt.sign(
                {
                    id: user.id, email: user.email
                }, JWT_SECRET ,{ expiresIn: "24h"}
            )
            res.json({success: true, token, user : { id: user.id, email :user.email}}) }
             catch( error: any) {
                console.error("Login error:", error.message);
                res.status(500).json({success: false, message: "Server error"})

             }}
        
             module.exports = { register, login}
    
