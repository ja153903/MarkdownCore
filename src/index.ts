import Express from 'express';

import { prisma } from './prisma';
import userRouter from './users';
import logger from './lib/logger';

const PORT = process.env.PORT ?? 8080;

const app = Express();

app.use('/api/users', userRouter);

app.listen(PORT, () => {
  logger.debug(`Application running on port ${PORT}`);
});

process.on('SIGTERM', async () => {
  logger.info('SIGTERM signal received. Gracefully shutting down');
  await prisma.$disconnect();
});
