const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 1234;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
