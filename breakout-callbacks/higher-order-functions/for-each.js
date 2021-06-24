const forEach = (arr, cb) => {
  for (const element of arr) {
    cb(element);
  }
};

const dogs = ['Fido', 'Barkley', 'Goldie', 'Clifford', 'Dioji'];
const behaviour = (dog) => {
  console.log(`Who's a good dog, ${dog}?`);
};

forEach(dogs, behaviour);
