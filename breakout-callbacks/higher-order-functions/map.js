const map = (arr, cb) => {
  const output = [];

  for (const element of arr) {
    const returnVal = cb(element);
    output.push(returnVal);
  }

  return output;
};

const dogs = ['Fido', 'Barkley', 'Goldie', 'Clifford', 'Dioji'];
const behaviour = (dog) => {
  return `Who's a good dog, ${dog}?`;
};

const mapped = map(dogs, behaviour);
console.log(mapped);
