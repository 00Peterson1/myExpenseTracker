import { Request, Response } from "express"
const { getAllTransactions, addTransaction } = require("../services/transactionService")


export function getTransactions(req: any, res: any) {
    const transactions = getAllTransactions()
    res.json({sucess:true, data: transactions})
}

export function createTransaction(r: any, rs: any){
    const { type, amount, category, description}= r.body

    const transaction = addTransaction({ type, amount, category, description})
        rs.status(201).json({sucess: true, data: transaction})
    }

    module.exports = { getTransactions, createTransaction}