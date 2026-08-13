import { describe, expect, it } from 'vitest';
import { spawn } from 'node:child_process';

function waitForServer(port: number, timeoutMs = 15000): Promise<void> {
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

describe('server runtime behavior', () => {
  it('serves the root response and rejects unauthenticated transactions requests', async () => {
    const child = spawn('npm', ['run', 'start'], {
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
      expect(rootResponse.status).toBe(200);
      expect(await rootResponse.json()).toEqual({ message: 'Finance Tracker API is running' });

      const transactionsResponse = await fetch('http://127.0.0.1:3000/api/transactions');
      expect(transactionsResponse.status).toBe(401);
    } finally {
      child.kill('SIGTERM');
      await new Promise((resolve) => child.once('exit', resolve));
    }
  });
});