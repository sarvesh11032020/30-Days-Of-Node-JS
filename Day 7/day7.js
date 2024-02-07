const express = require('express');
const app = express();

function requestLoggerMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  console.log(`${timestamp} - ${method} request received`);
  next();
}

function authenticateMiddleware(req, res, next) {
  req.user = { username: 'PSA' };
  next();
}

app.use(requestLoggerMiddleware);

app.get('/', authenticateMiddleware, (req, res) => {
  res.send(`Welcome, ${req.user.username}!`);
});

app.get('/public', (req, res) => {
  res.send('This is a public route.');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});