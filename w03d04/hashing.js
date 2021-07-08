const bcrypt = require('bcryptjs');

const plaintextPassword = 'hello';

bcrypt.genSalt(10, (err, salt) => {
  console.log(salt);
  bcrypt.hash(plaintextPassword, salt, (err, hash) => {
    console.log(hash);
  });
});

bcrypt.genSalt(10)
  .then((salt) => {
    bcrypt.hash(plaintextPassword, salt)
      .then((hash) => {
        console.log(hash);
      });
  });

bcrypt.genSalt(10)
  .then((salt) => {
    return bcrypt.hash(plaintextPassword, salt)
  })
  .then((hash) => {
    console.log(hash);
  });

const hashedPassword = '$2a$10$FxQzcwTDRcHGXLOkb9bNaeKHq9KsfJepi4AEaQoo2qxZfg9wBVJ7O';

const testPassword = 'hello';

bcrypt.compare(testPassword, hashedPassword, (err, result) => {
  console.log('result:', result);
});
