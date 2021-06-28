/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // return Math.min(...arr);

  // setup a variable to hold the lowest number
  let lowest = arr[0];

  // iterate through the array
  for (const num of arr) {
    // compare current value against lowest number
    if (num < lowest) {
      // if lower, replace lowest with current value
      lowest = num;
    }
  }

  // return the lowest number
  return lowest;
};

// const login = function(username, password) {
//   if (!username) {
//     return new Error()
//   }
// };


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // set up a variable to hold the highest value
  let highest = arr[0];

  // iterate through the array
  for (const num of arr) {
    // compare each value against the current highest
    if (num > highest) {
      // if higher, replace current highest
      highest = num;
    }
  }

  // return highest number
  return highest;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const highest = max(arr);
  const lowest = min(arr);
  return highest - lowest;
};

// Don't change below:

module.exports = { min, max, range };
