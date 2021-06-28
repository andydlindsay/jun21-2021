/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

// 2,4,5,7,9,9
// 0 1 2 3 4 5
// arr.length / 2 rounded down

const median = function(arr) {
  // sort the incoming array
  arr.sort();

  const middleIndex = Math.floor(arr.length / 2);

  // question: is the array even-length or odd-length
  if (arr.length % 2 === 0) {
    // if even, return average of two middle elements
    const numOne = arr[middleIndex];
    const numTwo = arr[middleIndex - 1];
    const average = (numOne + numTwo) / 2;
    return round(average);
  }

  // if odd, return middle element 
  return arr[middleIndex];
};

// Don't change below:
module.exports = { median };
