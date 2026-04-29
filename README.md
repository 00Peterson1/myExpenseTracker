# MYExpenseTracker API

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)

![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)


## Description

MyExpenseTracker API is a backend API that allow users to securely track their financial transactions. Users can register, authenticate, and manage their income and expenses through this interface.


## Features
- A user registers and authenticates with JWT Tokens
- Password hashing with bcrypt
- Creates and retrieves financial info
- Input validation on all endpoints
- Protected routes - authentication requires
- PostgreSQL storage
- Deployed on Railways and is live


## Tech Stack
- **Runtime**: Node.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **Authentication**: JWT
- **Validation**: Zod
- **Deployment**: Railway


## API Documentation

### Base URL
- Local: `http://localhost:8080`
- Production: `https://myexpensetracker-production-9cd7.up.railway.app`

---

### Authentication

#### Register


**Request body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "email": "user@example.com",
    "created_at": "2026-04-29T12:00:00.000Z"
  }
}
```

---

#### Login

**Request body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "user": {
    "id": 1,
    "email": "user@example.com"
  }
}
```

---

### Transactions

> All transaction endpoints require authentication.
> Include the token in the Authorization header:
> `Authorization: Bearer "your-token-here"`

#### Get all transactions


**Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "type": "income",
      "amount": "50000.00",
      "category": "salary",
      "description": "Monthly salary",
      "created_at": "2026-04-29T12:00:00.000Z"
    }
  ]
}
```

---

#### Create transaction

**Request body:**
```json
{
  "type": "expense",
  "amount": 1500,
  "category": "food",
  "description": "Groceries"
}
```

**Validation rules:**
- `type` must be `"income"` or `"expense"`
- `amount` must be a positive number
- `category` must be a non-empty string
- `description` must be a non-empty string

**Response (201):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "type": "expense",
    "amount": "1500.00",
    "category": "food",
    "description": "Groceries",
    "created_at": "2026-04-29T12:00:00.000Z"
  }
}
```

---

### Error responses

| Status Code | Meaning |
|-------------|---------|
| 400 | Bad request — invalid input |
| 401 | Unauthorized — missing or invalid token |
| 500 | Internal server error |

## Deployment

This API is deployed on Railway with a managed PostgreSQL database.

Live URL: https://myexpensetracker-production-9cd7.up.railway.app


## Author

**Peterson Amos Mwaura**
- GitHub: [@00Peterson1](https://github.com/00Peterson1)
- Domain: [petersonlabs.dev](https://petersonlabs.dev)

Software Engineer based in Nairobi, Kenya. Building toward backend systems and security engineering.