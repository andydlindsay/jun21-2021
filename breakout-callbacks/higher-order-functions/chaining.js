const dogs = ['Fido', 'Barkley', 'Goldie', 'Clifford', 'Dioji'];

const output = dogs
  .filter((dog) => dog.length > 5)
  .map((dog) => `Who's a good dog, ${dog}?`);

console.log(output);
