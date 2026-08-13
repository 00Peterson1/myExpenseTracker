"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pool = require("../utils/db");
const bcrypt = require("bcrypt");
//A function that creates a user and adds to the DB
async function createUser(email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query("INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email, created_at", [email, hashedPassword]);
    return result.rows[0];
}
//Finds the created users from the DB
async function findUserByEmail(email) {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    return result.rows[0];
}
async function verifyPassword(plainPassword, hashedPassword) {
    return bcrypt.compare(plainPassword, hashedPassword);
}
module.exports = { createUser, findUserByEmail, verifyPassword };
//# sourceMappingURL=UserService.js.map