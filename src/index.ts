import Express, { Express as IExpress } from 'express';

import { PORT as PORT_TYPE } from '@types-local';

const PORT: PORT_TYPE = process.env.PORT ?? 8080;

const app: IExpress = Express();

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`)
});