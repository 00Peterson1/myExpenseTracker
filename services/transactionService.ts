//const  { Transaction } = require("../models/transaction");
const pool  = require("../utils/db");


async function getAllTransactions() {
    const result = await pool.query("SELECT * FROM transactions ORDER BY created_at DESC")
    return result.rows
}

async function addTransaction(data: any) {
   const { type, amount, category, description } = data

   const result = await pool.query(
    "INSERT INTO transactions (type, amount, category,description) VALUES($1, $2, $3, $4) RETURNING *",
    [type, amount, category, description])
    return result.rows[0]
    }




module.exports = { getAllTransactions, addTransaction}