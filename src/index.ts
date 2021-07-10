import Express from 'express';

import { prisma } from './prisma';
import userRouter from './users';

const PORT = process.env.PORT ?? 8080;

const app = Express();

app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});

process.on('SIGTERM', async () => {
  console.info('SIGTERM signal received. Gracefully shutting down');
  await prisma.$disconnect();
});
