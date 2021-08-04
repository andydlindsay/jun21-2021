// no side effects
// always returns the same thing given the same arguments

let additionValue = 2;

const addTwo = (num) => {
  const result = num + additionValue;
  additionValue++;

  return result;
};
