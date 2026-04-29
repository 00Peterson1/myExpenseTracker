import { checkServerIdentity } from "node:tls";


const { Pool } = require("pg");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const pool = new Pool(
 {
   connectionString: process.env.DATABASE_URL,
    // ssl: {
    //   rejectUnathorized: false,
    //   checkServerIdentity: () => undefined
    //     }
 }
)


/*pool.connect(
    (err:any, client:any,release:any) => {
        if(err){
            console.error("Database connection error:", err.message)
              
              }  else{
                console.log("Database Connected successfully")
                release()
              }
            
        }
    
)*/


module.exports = pool