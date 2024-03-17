const express = require('express');
const userController = require('./controllers/user.controller');

const app = express();
const PORT = 3001;

app.use(userController);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT http://127.0.0.1:${PORT}/`);
});