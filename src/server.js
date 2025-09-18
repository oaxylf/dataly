import app from './app.js'; // import the module of app from ./app.js

const PORT = process.env.PORT || 3000; // This does saves the port to 3000

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}...`);
});
