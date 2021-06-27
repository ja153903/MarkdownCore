import Express from 'express';

import { prisma } from './prisma';

const PORT = process.env.PORT ?? 8080;

const app = Express();

// TODO: hook these endpoints up with routers
app.use('/api/users');
app.use('/api/posts');
app.use('/api/auth');

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});

process.on('SIGTERM', async () => {
  console.info('SIGTERM signal received. Gracefully shutting down');
  await prisma.$disconnect();
});
