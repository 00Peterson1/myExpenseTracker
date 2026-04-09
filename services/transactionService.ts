const  { Transaction } = require("../models/transaction");

const transactions: any[] = []

export function getAllTransactions() {
    return transactions
}

export function addTransaction(data: any) {
    const newTransaction = {
        id: transactions.length + 1,
        ...data,
        createdAt: new Date()
    }

    transactions.push(newTransaction);
     return newTransaction

}

module.exports = { getAllTransactions, addTransaction}