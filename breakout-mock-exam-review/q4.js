/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */
const functions = require('./q0');

// This function is to be used by stdev. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

const stdev = function(arr) {
  // sqrt(sum((x - populationMean)^2)/numberOfValues)

  const numberOfValues = arr.length;
  const populationMean = functions.sum(arr) / numberOfValues;

  const differences = [];
  for (const x of arr) {
    const distanceFromMean = x - populationMean;
    const squared = Math.pow(distanceFromMean, 2);
    differences.push(squared);
  }

  // console.log(differences);
  const differencesSum = functions.sum(differences);
  // console.log(differencesSum);
  const average = differencesSum / numberOfValues;

  return round(Math.sqrt(average));
};

// Don't change below:
module.exports = { stdev };
