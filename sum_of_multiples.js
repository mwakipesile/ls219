function average() {
  total = 0;
  scoreCount = 0;
  input = prompt('Enter score: Enter "done" if you\'re done');
  
  while (input !== 'done') {
    total += Number(input);
    scoreCount++;
    input = prompt('Enter score: Enter "done" if you\'re done')
  }
  
  return total / scoreCount;
}

function grade() {
  averageScore = average();
  
  switch(true) {
    case(averageScore < 50): return 'F';
    case(averageScore < 70): return 'C';
    case(averageScore < 90): return 'B';
    case(averageScore >= 90): return 'A';
    default: return 'invalid inputs';
  }
}

function displayGrade() {
  console.log('Based on the average of your scores your letter grade is "' + grade() + '".');
}

//displayGrade();

function gcd(g, l) {
  j = 1;
  increment = l % 2 === 0 ? 1 : 2;
  
  for (var i = l; i >= 1; j += increment) {
    i = l / j;
    
    if (Math.floor(i) !== i) continue;
    if (g % i === 0) return i;
  }
}

function gcd2(g, l) {
  var d = g % l;
  
  while(d !== 0) {
    g = l;
    l = d;
    d = g % l;
  }
  
  return l;
}

//console.log(gcd2(48, 12));

//gcd(35, 20);   // 5
function gcd(arr) {
  count = arr.length;
  
  for (var i = 1; i < count; i++) {
    arr[i] = gcd2(arr[i], arr[i - 1]);
  }
  
  return arr[i - 1];
}

//console.log(gcd([48, 54, 12, 9]));

function indexOf(firstString, secondString) {
  var size1 = firstString.length;
  var size2 = secondString.length;
  var lastIdx = size1 - size2;
  
  for (var i = 0; i < lastIdx; i++) {
    var found = true;
    
    for (var j = 0; j < size2; j++) {
      if (firstString[i + j] !== secondString[j]) {
        found = false;
        break;
      }
    }

    if (found === true) return i;
  }
  
  return -1;
}

Problem
Requirement. Given a positive number, find next smaller number which has same digits

Data structure
- Need to traverse integers 

  Array of individual ints - list functions

algo
start at end, if digit at i < digit at i - 1, swap digits & return number, if not move left do same until you find
i < i - 1
if not found, return  -1
  
 split ints, reverse array since need to traverse from end
 - reversed digits = String(number).split('').map(Number).reverse();

 var digs = String(n).split('').map(Number).reverse();
  
  size = digs.length;
  
  for (j = 1; j < size; j++) {
    for (i = j; size = digs.length, i < size; i++) {
      if (digs[i - j] < digs[i] && !(i === size - 1 && digs[i - j] === 0)) {
        
        digs = nextSmall(digs.slice(0, i), digs[i]).concat(digs.slice(i + 1));
        return parseInt(digs.reverse().join(''), 10);
      }
    }
  }

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
      Tese are the test cases tat are provided wit the problem. tey cover fairly nice range for valid inputs.
      - limit number is less than all numbers in the set
      .  using a given set 
      . using default set, [3, 5] 

      and seem satisfactory. Terefore I did not add any of my own.

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


Borta borta







