
  /*

    Write a program that, given a number, can find the sum of all the multiples of 
    particular numbers up to but not including that number.

    If we list all the natural numbers up to but not including 20 that are 
    multiples of either 3 or 5, we get 3, 5, 6, 9, 10, 12, 15, and 18. The sum of 
    these multiples is 78.

    Write a program that can find the sum of the multiples of a given set of 
    numbers. If no set of numbers is given, default to 3 and 5.
  
    ////////////////////////
    Understanding the problem
    - Input; 
      1. natural number (limit)
      2. Set(array) of factors[optional]
        - implicit requirement; contains natural numbers greater than zero
        - If second input (set of numbers) is not given, default to [3, 5]

      - Handling failure; return null if invalid input[number or set]

    - output
      sum of all multiples, up to limit - 1, that have at least one factor in a set from second input.
      - implicit requirements
      1. The multiples must be unique. In the example input shown in problem description, 
      15 appears only once in the list of multiples of 3, and 5 between 1 to 20 - 1, 
      despite being a multiple of both 3, and 5

      2. Only positive integers (natural numbers greater than zero) are valid inputs. For example, integers < 0 
      can be used neither as a limit, nor as one of the factors in a set

Examples / Test cases
      

  sumOfMultiples(1) // returns 0


  sumOfMultiples(4) // returns 3


  sumOfMultiples(10) // returns 23

  sumOfMultiples(100) // returns 2318

  sumOfMultiples(1000) // returns 233168

  sumOfMultiples(20, [7, 13, 17]) // returns 51

  sumOfMultiples(15, [4, 6]) // returns 30

  sumOfMultiples(150, [5, 6, 8]) // returns 4419

  sumOfMultiples(10000, [43, 47]) // returns 2203160

  sumOfMultiples(20, []) // returns 78

  sumOfMultiples(-20) // returns null

  sumOfMultiples(20, [0]) // returns null

  sumOfMultiples(20, [7, 0, 13, 17]) // returns null

  sumOfMultiples(20, [7, undefined, 13, 17]) // returns null

  sumOfMultiples(20, [7, null, 13, 17]) // returns null

  sumOfMultiples(20, [7, -13, 17]) // returns null

  sumOfMultiples(20, [7, Infinity, 17]) // returns null

  sumOfMultiples(Infinity, [7, 13, 17]) // returns null

  sumOfMultiples(20, [7, [13], 17]) // returns null

  sumOfMultiples(20, [[7, 13]]) // returns null

  Data Structure

  Integers
  
    - Loop through numbers n = 1 to n < limit
  Array
    - use Array.prototype.some() to find out if n is a multiple of at least one of the numbers in the set

ALGORITHM
  declare variable sum, and initiate it to zero: sum = 0;

  if (isInvalidLimit(limit) || validFactors(factors) return null;

  define function isFactor(num) that returns result of n % num === 0;

  for numbers n = 1 to n < limit,
    if (array.some(isFactor)) sum += n;
  }

  ALGORITHM 2

  factors.forEach(factor)
    m = 2
    multiple = factor

    while multiple < limit {
      multiples.push(multiple)
      multiple = factor * m
      m += 1
    }

*/


function sumOfMultiples(limit, factors = [3, 5]) {
  var multiple;
  var multiples = [];

  var isValidInt = num => Number.isInteger(num) && num > 0;
  var validFactors = array => Array.isArray(array) && array.every(isValidInt);

  var collectFactorsUniqueMultiples = function(factor) {
    multiple = factor;

    while (multiple < limit) {
      if (!multiples.includes(multiple)) multiples.push(multiple);
      multiple += factor;
    }
  };

  var sumMultiples = (sum, currentMultiple) => sum + currentMultiple;
  
  // Validate inputs. Return null for invalid inputs
  if (!isValidInt(limit) || !validFactors(factors) || factors.length === 0) return null;

  factors.forEach(collectFactorsUniqueMultiples);
  
  return multiples.reduce(sumMultiples, 0);
}

// Second argument's omitted, default to factors [3, 5]
console.log(sumOfMultiples(10)); // returns 23
console.log(sumOfMultiples(100)); // returns 2318
console.log(sumOfMultiples(1000)); // returns 233168
// Limit is smaller than all factors (3, 5)
console.log(sumOfMultiples(1)); // returns 0
// Limit is smaller than some factor(s)
console.log(sumOfMultiples(4)); // returns 3
// Limit is equal to the factor
console.log(sumOfMultiples(20, [20])); // returns 0
// Second argument's an empty array; default to factors [3, 5]
console.log(sumOfMultiples(20, [])); // returns 78
// Second argument(factors) is given
console.log(sumOfMultiples(20, [7, 13, 17])); // returns 51
console.log(sumOfMultiples(15, [4, 6])); // returns 30
console.log(sumOfMultiples(150, [5, 6, 8])); // returns 4419
console.log(sumOfMultiples(10000, [43, 47])); // returns 2203160
// Bad inputs
console.log(sumOfMultiples(20, [0])); // returns null
console.log(sumOfMultiples('20')); // returns null
console.log(sumOfMultiples(20, [7, 0, 13, 17])); // returns null
console.log(sumOfMultiples(20, [7, undefined, 13, 17])); // returns null
console.log(sumOfMultiples(20, [7, null, 13, 17])); // returns null
console.log(sumOfMultiples(20, [7, -13, 17])); // returns null
console.log(sumOfMultiples(20, [7, Infinity, 17])); // returns null
console.log(sumOfMultiples(Infinity, [7, 13, 17])); // returns null
console.log(sumOfMultiples(20, [7, [13], 17])); // returns null
console.log(sumOfMultiples(20, [[7, 13]])); // returns null
