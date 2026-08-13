"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const { register, login } = require("../controllers/authController");
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
module.exports = router;
//# sourceMappingURL=auth.js.map