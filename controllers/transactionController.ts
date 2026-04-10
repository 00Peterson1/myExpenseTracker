import { Request, Response } from "express"
const { getAllTransactions, addTransaction } = require("../services/transactionService")
const { validateTransaction } = require("../utils/transactionValidator")

export function getTransactions(req: any, res: any) {
    const transactions = getAllTransactions()
    res.json({sucess:true, data: transactions})
}

export function createTransaction(r: any, rs: any){
  const results = validateTransaction(rs.body);

   if(!results.success){
    rs.status(400).json({success: false, errors: results.error.errors})
    return
   }

    const transaction = addTransaction(results.data)
        rs.status(201).json({sucess: true, data: transaction})
    }

    module.exports = { getTransactions, createTransaction}