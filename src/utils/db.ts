

const { Pool } = require("pg");

const pool = new Pool(
 {
    user: "postgres",
    host: "localhost",
    database : "myexpensestracker",
    password : "2004",
    port: 5432
 }
)


pool.connect(
    (err:any, client:any,release:any) => {
        if(err){
            console.error("Database connection error:", err.message)
              
              }  else{
                console.log("Database Connected successfully")
                release()
              }
            
        }
    
)


module.exports = pool