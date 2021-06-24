let addition = 5;

const arrOfSums = [];

const addTwo = (num) => {
  const result = num + addition;
  // console.log(result);
  arrOfSums.push(result);
  return result;
};

addTwo(2);
