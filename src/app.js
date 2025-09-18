import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Hello from dataly API! This is a successful result from express'); // This will print this message as if it is successful in the web.
});

export default app;
