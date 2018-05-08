// Roman numerals

/*

The Romans were a clever bunch. They conquered most of Europe and ruled it for hundreds of years. They invented concrete and straight roads and even bikinis. One thing they never discovered though was the number zero. This made writing and dating extensive histories of their exploits slightly more challenging, but the system of numbers they came up with is still in use today. For example the BBC uses Roman numerals to date their programmes.

The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

 1  => I
10  => X
 7  => VII

There is no need to be able to convert numbers larger than about 3000. (The Romans themselves didn't tend to go any higher)

Wikipedia says: Modern Roman numerals ... are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.

To see this in practice, consider the example of 1990. In Roman numerals 1990 is MCMXC:

1000=M
900=CM
90=XC

2008 is written as MMVIII:

2000=MM
8=VIII

Understanding the Problem
input
  - an integer or string of integer between 1 and 3000 inclusive
    - convert valid inputs to their Roman numerals equivalent
  - implicit knowledge
    - Numbers up to 1000 and their Roman numerals equivalent
      1 = I
      5 = V
      10 = X
      50 = L
     100 = C
     500 = D
    1000 = M
  - Hindu-Arabic to Roman numerals conversion rules
    - start with left most digit
    - skip any digit with value zero
    - for a digit between 1 and 3, its Roman equivalent is:
      - Roman equivalent of its place value, digit times
 
        examples:
        - digit = 3, its place value = 1000s,
          Roman equivalent is 'M', 3 times = 'MMM'
        
        - digit = 2, its place value = 1s,
          Roman Numeral equivalent is 'I', 2 times = 'II'
        - digit = 1, its place value = 100s,
          Roman Numeral equivalent is 'C', one time = 'C'
    - if a digit is 4, or 9, its Roman equivalent is:
      - Roman equivalent of its place value, 
        prepended to Roman equivalent of (digit + 1) * place value
       examples
         4 
           place value of 4 = 1 
           Roman 1 = 'I' and (4 + 1) * 1 = V
           4 = I prepended to V = IV 
            
         400 
           place value of 4 = 100 
           Roman 100 = 'C' and  (4 + 1) * 100 = 'D'
           400 = 'C' prepended to 'D' = 'CD'
         9
           place value of 9 = 1
           Roman 1 = 'I' and (9 + 1) * 1 = 10 = 'X'
           9 = 'I' prepended to 'X' = 'IX'
         90
           place value of 9 = 10
           Roman 10 = 'X' and (9 + 1) * 10 = 100 = 'C'
           90 = 'X' prepended to 'C' = 'XC'
  - if a digit is between 6 and 8, its Roman equivalent 
      Roman 5 prepended to Roman (digit - 5), in digit's place value
      example
          80
            place value of 8 = 10,
            Roman 5 in 10s place value = 'L', 
            Roman (8 - 5) in 10s place value  = 'XX
            80 = 'L' prepended to 'XXX' = 'LXXX'
output
  - return Roman numeral equivalent of the input
*/


/* 
DATA STRUCTURE 
I needed to extract one digit at a time, which can be achieved by either using remainder operator(%) within a while loop, or I can convert the input number into an array of digit characters and use Array's built in iterators like map. I chose the latter for it'd lead to a more readable code, easy to follow code.

- Array. Turn input number into array of digits or digit characters 
  - index (position) matters (determines place value)
  - iteration: find value of each character(digit) individually based on position

    OR 
    - Integer
    - using modulo/reminder operator to get digit & place value within while loop

- hash/object
  - look up table to associate a digits+place values with their Roman numerals equivalent

I will likely be skipping the mental model part because I prefer to think out and explain why I've chosen data structure I choose, which not only helps me to see the folly of my choices sometimes, but also doubly serve as my mental model


ALGORITHM
- create dictionary to translate numbers to Roman symbols
    RomanDictionary = {'1': 'I', '5': 'V', '10': 'X'..... '1000': M }

- convert input number to string, split it to array of chars, digits

- map digits toRomanNum(), then join them and return resulting string
  
  - toRomNum(digit, idx) 
      place_value = last_idx - idx
      
      if digit < 4
        return toRomanSymbol(place_value) times digit
      
      if digit = 4 or 9
        return toRomanSymbol(place_value) + 
               toRomanSymbol((digit + 1) * place_value)
      if digit >= 6 and <= 8
        return toRomanSymbol(5 * place_value) +
               toRomanSymbol(place_value) times (digit - 5)

      - toRomanSymbol(integer)
          convert integer to string of integer, integer_string
          return RomanDictionary[integer_string]
*/

/* Code */

const RomanDictionary = {
  '1': 'I',
  '5': 'V',
  '10': 'X',
  '50': 'L',
  '100': 'C',
  '500': 'D',
  '1000': 'M',
};

function toRoman(num) {
  var digits;
  var last_idx

  if (!validInput(num)) return 'Invalid input';
  
  digits = num.toString().split('');
  last_idx = digits.length - 1;

  function validInput(num) {
    var digits = num => num.split('').every(chr => chr >= '0' && chr <= '9');

    if (typeof num === 'string' && digits(num)) num = Number(num);
    if (Number.isInteger(num)) return num > 0 && num <= 3000;
    return false;
  }

  function toRomanNumeral(digit, idx) {
    var place_val = 10 **(last_idx - idx);
    var toRomanSym = num => RomanDictionary[num.toString()];

    digit = Number(digit);

    if (digit === 0) return '';
    if (digit < 4) return toRomanSym(place_val).repeat(digit);
    if (digit === 4 || digit === 9) {
      return toRomanSym(place_val) + toRomanSym((digit + 1) *  place_val);
    }

    // Default: for digits 6 to 8
    return toRomanSym(5 * place_val) + toRomanSym(place_val).repeat(digit - 5);
  }
  
  return digits.map(toRomanNumeral).join('');
}

/* Examples 

The following examples were given with the problem as a test suite 
*/

console.log(toRoman(1)); // returns 'I' 

console.log(toRoman(2)); // returns 'II' 

console.log(toRoman(3)); // returns 'III' 

console.log(toRoman(4)); // returns 'IV' 

console.log(toRoman(5)); // returns 'V'

console.log(toRoman(6)); // returns 'VI' 

console.log(toRoman(9)); // returns 'IX'

console.log(toRoman(27)); // returns 'XXVII' 

console.log(toRoman(48)); // returns 'XLVIII'

console.log(toRoman(59)); // returns 'LIX'

console.log(toRoman(93)); // returns 'XCIII'

console.log(toRoman(141)); // returns 'CXLI'

console.log(toRoman(163)); // returns 'CLXIII'

console.log(toRoman(402)); // returns 'CDII'

console.log(toRoman(575)); // returns 'DLXXV'

console.log(toRoman(911)); // returns 'CMXI'

console.log(toRoman(1024)); // returns 'MXXIV'

console.log(toRoman(3000)); // returns 'MMM'

/*
I copied some examples from test suite, and converted inputs into integer strings,
*/

console.log(toRoman('163')); // returns 'CLXIII'

console.log(toRoman('402')); // returns 'CDII'

console.log(toRoman('575')); // returns 'DLXXV'

console.log(toRoman('911')); // returns 'CMXI'

console.log(toRoman('1024')); // returns 'MXXIV'

console.log(toRoman('3000')); // returns 'MMM'

// …and added a few bad inputs:-

console.log(toRoman(3001)); // returns 'Invalid input'

console.log(toRoman(0)); // returns 'Invalid input'

console.log(toRoman(00)); // returns 'Invalid input'

console.log(toRoman(-1)); // returns 'Invalid input'

console.log(toRoman('1a4')); // returns 'Invalid input'

console.log(toRoman([208])); // returns 'Invalid input'

console.log(toRoman('0')); // returns 'Invalid input'

console.log(toRoman('0000')); // returns 'Invalid input'

console.log(toRoman('1,000')); // returns 'Invalid input'

console.log(toRoman('2 9')); // returns 'Invalid input'

console.log(toRoman(10.24)); // returns 'Invalid input'

console.log(toRoman('10.24')); // returns 'Invalid input'

