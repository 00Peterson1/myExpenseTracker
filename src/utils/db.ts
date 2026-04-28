

const { Pool } = require("pg");

const pool = new Pool(
 {
   connectionString: process.env.DATABASE_URL, ssl:process.env.NODE_ENV === "production" ? {rejectUnathorized: false} : false
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