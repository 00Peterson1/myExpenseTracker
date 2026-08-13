"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const { Router } = require("express");
const { getTransactions, createTransaction } = require("../controllers/transactionController");
const authMiddleware = require("../middleware/authMiddleware");
const router = Router();
router.get("/", authMiddleware, getTransactions);
router.post("/", authMiddleware, createTransaction);
module.exports = router;
//# sourceMappingURL=transactions.js.map