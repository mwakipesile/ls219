
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
      2. Set(array) of numbers[optional]
        - implicit requirement; contains natural numbers greater than zero
        - If second input (set of numbers) is not given, default to [3, 5]

      - Handling failure; return null if invalid input[number or set]

    - output
      sum of the multiples of one or more numbers in a set from second input
        - The multiples must be < limit and each is a multiple of any number in a set

      Ive been bitten more than a few times where I get stuck and after several futile attempt to solve nagging
      problems, i end up having to scratch the entire solution because the approach is either not practical, or has
      a seemingly unsolvable but. i usually reach that conclusion after one of the following;
      1. unable to fix the broken part of the solution
      2. solution is extremely ugly after going troug a series of ugly acks tat beget more ugly acks due to causing
      unforeseeable bugs

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

  sumOfMultiples(20, []) // returns null

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

  Integer
    - Loop through n while n >= 1, and n < limit
  Array
    - use Array.prototype.some() to find out if n is a multiple of at least one of the numbers in the set

ALGORITHM
  declare variable sum, and initiate it to zero: sum = 0;

  if (isInvalidLimit(limit) || isInvalidSet(factors) return null;

  define function isFactor(num) that returns result of n % num === 0;

  for numbers n = 1 to n < limit,
    if (array.some(isFactor)) sum += n;
  }

  */


/*  CODE */

function sumOfMultiples(limit, factors = [3, 5]) {
  sum = 0;
  var i;
  
  var isInvalidNumber = num => !(Number.isInteger(num) && num > 0);
  var isInvalidSet = array => !Array.isArray(array) ||
                              array.some(isInvalidNumber) ||
                              array.length === 0;
  
  if (isInvalidNumber(limit) || isInvalidSet(factors)) return null;
  
  var isFactor = n => i % n === 0;
  
  for (i = 1; i < limit; i++) {
    if (factors.some(isFactor)) sum += i;
  }
    
  return sum;
}
