const express = require("express");
const transactionRoutes = require("./routes/transactions")

const app = express();
const port = 3000;

app.use(express.json())

app.use("/api/transactions", transactionRoutes)


app.get("/", (req: any, res: any) => 
{
    res.json({message: 'Finance Tracker API is running'})
});

app.listen(port, ()=> {console.log(`Server is running on port ${port}`)})





































/*interface Transaction {
    type: "income" | "expense",
    amount: number,
    category: string,
    description: string
}

const transactions: Transaction[] = [
    {type: "income", amount: 5000, category: "Salary", description: "Monthly salary"},
    {type: "expense", amount: 1500, category: "Rent", description: "Monthly rent"},
    {type: "expense", amount: 200, category: "Groceries", description: "Weekly groceries"},
    {type: "expense", amount: 100, category: "Entertainment", description: "Movie tickets"}
]


function calculateBalance(transactions: Transaction[]) : number {
    let balance = 0;

    for (const transaction of transactions) {
        if (transaction.type === "income") {
            balance += transaction.amount;
        } else if (transaction.type === "expense") {
            balance -= transaction.amount;
        }   

        
    }
    
    return balance;

}

console.log("Current Balance: $" + calculateBalance(transactions));

function getSummary(Transactions: Transaction[]) : void{
    let totalIncome: number = 0;
    let totalExpenses = 0;


    for(const transaction of Transactions){
        if(transaction.type === "income")
            totalIncome += transaction.amount;
        else
            totalExpenses += transaction.amount;
    }

    console.log(`Your Expenses: ${totalExpenses}`);
    console.log(`Your Income: ${totalIncome}`);


    console.log("Balance =" ,totalIncome - totalExpenses);
}

getSummary(transactions)*/