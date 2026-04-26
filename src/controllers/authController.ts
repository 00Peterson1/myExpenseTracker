const { createUser, findUserByEmail, verifyPassword } = require("../services/UserService");

const jwt = require("jsonwebtoken")