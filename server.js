import { spawn } from 'child_process';

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

const server = spawn('vite', ['preview', '--host', host, '--port', port], {
  stdio: 'inherit'
});

server.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});