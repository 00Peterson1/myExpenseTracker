"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { getAllTransactions, addTransaction } = require("../services/transactionService");
const { validateTransaction } = require("../utils/transactionValidator");
async function getTransactions(req, res) {
    try {
        const transactions = await getAllTransactions();
        res.json({ sucess: true, data: transactions });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
}
async function createTransaction(req, res) {
    try {
        const results = validateTransaction(req.body);
        if (!results.success) {
            res.status(400).json({ success: false, errors: results.error.errors });
            return;
        }
        const transaction = await addTransaction(results.data);
        res.status(201).json({ sucess: true, data: transaction });
    }
    catch (error) {
        console.error("Error", error.message);
        res.status(500).json({
            success: "false", message: "Server Error"
        });
    }
}
module.exports = { getTransactions, createTransaction };
//# sourceMappingURL=transactionController.js.map