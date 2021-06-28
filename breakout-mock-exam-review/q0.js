/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  const length = arr.length;
  return length;

  // return arr.length;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
       - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  // arr.reduce((a, c) => a + c, 0);

  // set up a return variable
  let total = 0;

  // iterate through array
  for (const num of arr) {
    // add each element to total
    total += num;
    // total = total + num;
  }

  // return the variable
  return total;
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  if (arr.length === 0) {
    return null;
  }

  // mean = total(sum) / numofelements
  const numElements = count(arr);
  const total = sum(arr);

  const average = total / numElements;
  const roundedAvg = round(average);
  return roundedAvg;
};

// Don't change below:
module.exports = { count, sum, mean };
