export interface User {
    id: number,
    email: string,
    password: string,
    created_at: Date
}

export interface CreateUserInput {
    email: string,
    password: string
}

export interface LoginInput {
    email: string, 
    password: string}