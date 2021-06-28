/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // set up an object to hold our piles
  const piles = {};

  // iterate through the array
  for (const num of arr) {
    // have we seen this number before?
    if (piles[num]) {
      // if we have, increment the number
      piles[num] += 1;
    } else {
      // if we haven't, we want to establish a new key/value pair
      piles[num] = 1;
    }
  }

  console.log(piles);

  // set up two variables
  let highest = 0;
  let highestKey = null;

  // iterate through the piles object
  for (const key in piles) {
    // compare each value against current highest
    if (piles[key] > highest) {
      // if higher, update highest and highestKey
      highest = piles[key];
      highestKey = key;
    }
  }

  // return the highest key
  return highestKey;
};

// Don't change below:
module.exports = { mode };
