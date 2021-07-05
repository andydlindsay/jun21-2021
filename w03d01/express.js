const express = require('express');
const morgan = require('morgan');
const app = express();

// middleware

// app.use((req, res) => {
  // if (!req.cookies.loggedIn) {
    // res.send('stopped by the middleware');
  // }
  // next();
// });

app.use((req, res, next) => {
  // body parser
  // "username=jstamos&password=1234"
  req.body = {
    username: 'jstamos',
    password: '1234'
  };
  next();
});

// const morganMiddleware = morgan('dev');
// app.use(morganMiddleware);

app.use(morgan('dev'));

// add endpoints (VERB + PATH)

// GET /home
app.get('/home', (req, res) => {
  res.send(`you have visited the home page ${req.body.username}`);
});

// GET /about
app.get('/about', (req, res) => {
  res.send('welcome to the about page');
});

// tell our app to listen on a port
const port = 3333;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
