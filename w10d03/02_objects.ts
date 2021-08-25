interface IDog {
  id?: number;
  name: string;
  age?: number;
}

// const username = 'Frank';

const myDogs: IDog[] = [];

const dog: IDog = {
  name: 'Goldie',
  // age: 13,
};

myDogs.push(dog);
