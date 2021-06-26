import Express from 'express';

import { prisma } from './prisma';

const PORT = process.env.PORT ?? 8080;

const app = Express();

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received. Gracefully shutting down');
  prisma.$disconnect();
});
