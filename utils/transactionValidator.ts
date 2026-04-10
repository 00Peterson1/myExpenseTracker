const { z } = require("zod");
const testResult = z.number().positive()
console.log(testResult)
const transactionSchema = z.object({
    type: z.enum(["income", "expense"]),
    amount: z.number().positive(),
    category: z.string().min(1),
    description: z.string().min(1)
})


function validateTransaction(data:any) {
    return transactionSchema.safeParse(data)
}

module.exports = { validateTransaction };

