const sayHello = (name, age) => {
  console.log(`hello there ${name} you are ${age} years old`);
};

sayHello('Alice', 25);

// ['Alice', 25] => ... => 'Alice', 25
const args = ['Bob', 40];

sayHello(...args);
