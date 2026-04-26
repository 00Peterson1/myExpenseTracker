const express = require("express")

const { Router } = require("express")
const{ getTransactions, createTransaction } = require("../controllers/transactionController")


const router = Router();
router.get("/", getTransactions)
router.post("/", createTransaction)

module.exports = router