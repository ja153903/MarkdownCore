import Express from 'express';

const PORT = process.env.PORT ?? 8080;

const app = Express();

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
