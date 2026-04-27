const pool = require("../utils/db");
const bcrypt = require("bcrypt");

async function createUser( email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query (
        "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email, created_at", [email, hashedPassword]
    )

    return result.rows[0]
}

async function findUserByEmail( email: string) {
    const result = await pool.query (
        "SELECT * FROM users WHERE email = $1", [email]
    )
    return result.rows[0]
}

async function verifyPassword(plainPassword:string, hashedPassword: string) {
    return bcrypt.compare(plainPassword, hashedPassword)
    
}

module.exports = { createUser, findUserByEmail, verifyPassword}