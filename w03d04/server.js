const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
const port = 1234;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());

app.set('view engine', 'ejs');

const users = {
  'abc': {
    id: 'abc',
    email: 'jstamos@mail.com',
    password: '1234'
  }
};

const findUserByEmail = (email) => {
  // if we find a user, return the user
  // if not, return null
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      return user;
    }
  }

  return null;
};

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// GET /register
app.get('/register', (req, res) => {
  res.render('register');
});

// GET /protected
app.get('/protected', (req, res) => {
  const userId = req.cookies.userId;
  
  // check if the user has a cookie set
  if (!userId) {
    return res.status(401).send('you are not authorized to be here');
  }

  // retrieve the user based on userId
  const user = users[userId];

  if (!user) {
    return res.status(400).send('you have an old cookie! git gud!');
  }

  res.render('protected', { user });
});

// POST /login
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // make sure they gave us information
  if (!email || !password) {
    return res.status(400).send('email and password cannot be blank');
  }

  // find the user based on email
  const user = findUserByEmail(email);

  // did we not find a user?
  if (!user) {
    return res.status(400).send('no user with that email found');
  }

  // we found the user! now we need to compare the password
  if (user.password !== password) {
    return res.status(400).send('password does not match');
  }

  // happy path! at last
  res.cookie('userId', user.id);

  // redirect the user
  res.redirect('/protected');
});

// POST /register
app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // check if they gave us anything
  if (!email || !password) {
    return res.status(400).send('email and password cannot be blank');
  }

  // find out if email is already in use
  const user = findUserByEmail(email);

  if (user) {
    return res.status(400).send('that email address is already in use');
  }

  // add the new user to our users object
  const id = Math.floor(Math.random() * 1000) + 1;

  users[id] = {
    id,
    email,
    password
  };

  res.redirect('/login');
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the cookie
  res.clearCookie('userId');

  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
