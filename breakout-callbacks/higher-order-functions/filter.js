const filter = (arr, cb) => {
  const output = [];

  for (const element of arr) {
    const returnVal = cb(element);
    if (returnVal) {
      output.push(element);
    }
  }

  return output;
};

const dogs = ['Fido', 'Barkley', 'Goldie', 'Clifford', 'Dioji'];
const behaviour = (dog) => {
  // if (dog.length > 5) {
  //   return true;
  // } else {
  //   return false;
  // }

  return !(dog.length > 5);
};

const filtered = filter(dogs, behaviour);
console.log(filtered);
