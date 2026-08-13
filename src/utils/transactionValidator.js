"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { z } = require("zod");
const transactionSchema = z.object({
    type: z.enum(["income", "expense"]),
    amount: z.number().positive(),
    category: z.string().min(1),
    description: z.string().min(1)
});
function validateTransaction(data) {
    return transactionSchema.safeParse(data);
}
module.exports = { validateTransaction };
//# sourceMappingURL=transactionValidator.js.map