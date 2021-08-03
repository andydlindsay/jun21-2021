const user = {
  name: 'Alice',
  age: 25,
  stomach: ['cheerios']
};

// const copy = user;

const copy = {
  ...user,
  name: 'Bob',
  stomach: [
    ...user.stomach,
    'huevos rancheros'
  ]
};

// copy.stomach.push('huevos rancheros');

// copy.name = 'Bob';

console.log(user);
console.log(copy);
