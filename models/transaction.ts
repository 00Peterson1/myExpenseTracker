export interface Transaction {
    id: number,
    type: "income" | "expense",
    amount: number,
    category: string,
    description: string,
    createdAt: Date
}