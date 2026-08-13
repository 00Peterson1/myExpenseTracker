"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const node_child_process_1 = require("node:child_process");
function waitForServer(port, timeoutMs = 15000) {
    const deadline = Date.now() + timeoutMs;
    return new Promise((resolve, reject) => {
        const attempt = () => {
            fetch(`http://127.0.0.1:${port}/`)
                .then(() => resolve())
                .catch(() => {
                if (Date.now() >= deadline) {
                    reject(new Error(`Server did not become ready on port ${port}`));
                    return;
                }
                setTimeout(attempt, 250);
            });
        };
        attempt();
    });
}
(0, vitest_1.describe)('server runtime behavior', () => {
    (0, vitest_1.it)('serves the root response and rejects unauthenticated transactions requests', async () => {
        const child = (0, node_child_process_1.spawn)('npm', ['run', 'start'], {
            cwd: process.cwd(),
            env: {
                ...process.env,
                PORT: '3000',
                NODE_ENV: 'production',
            },
            stdio: 'ignore',
        });
        try {
            await waitForServer(3000);
            const rootResponse = await fetch('http://127.0.0.1:3000/');
            (0, vitest_1.expect)(rootResponse.status).toBe(200);
            (0, vitest_1.expect)(await rootResponse.json()).toEqual({ message: 'Finance Tracker API is running' });
            const transactionsResponse = await fetch('http://127.0.0.1:3000/api/transactions');
            (0, vitest_1.expect)(transactionsResponse.status).toBe(401);
        }
        finally {
            child.kill('SIGTERM');
            await new Promise((resolve) => child.once('exit', resolve));
        }
    });
});
//# sourceMappingURL=server.spec.js.map