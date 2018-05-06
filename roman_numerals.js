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
  - a number in Arabic numerals, to be converted to its Roman numerals equivalent
  - program should be able to convert up to 3000

  - implicit knowledge
    - Arabic numbers up to 1000 and their corresponding Roman numerals equivalent
      1 = I

      5 = V

      10 = X

      50 = L

      100 = C

      500 = D

      1000 = M

  - Arabic to Roman numerals conversion rules
    - start with left most digit
    - skip any digit with value zero

    - if digits between 1 and 3

      - if it's in 1000s place, its roman equivalent is digit times 'M'
        - i.e 2 = MM, 1 = M, 3 = MMM

      - if it's in 100s place it's Roman equivalent is digit times 'C'
        e.g 2 = CC
      
      - if it's in 10s place it's Roman equivalent is digit times 'X'
        e.g 3 = 'XXX'
      
      - if it's in 1s place it's Roman equivalent is digit times 'X'
        e.g 1 = 'I'

    - if a digit is 4, or 9, their Roman equivalent are:
      - Roman 1 in digit's place value prepended to (digit + 1) in digit's place value
        //prepended to Roman (digit + 1) % 10 in place value * 10^((digit + 1) / 10)

        - examples
          4 
            is in ones place 
            1 in ones = I and  (4 + 1) in ones = V
            4 = I prepended to V = IV 
            
          400 
            is in 100s place 
            1 in 100s = C and  (4 + 1) in 100s = D
            400 = C prepended to D = CD

          9
            is in ones place
            1 in ones = I, and (9 + 1) in ones = 1 in tens = X
            9 = I prepended to X = IX

          90
            is in tens place
            1 in tens = X, and (9 + 1) in tens = 1 in 100s = C
            90 = X prepended to C = IX

    - if digit is between 6 and 8, their Roman equivalent 
      Roman 5 prepended to Roman (digit - 5) in digits place value

      - example
          80
            is in tens,
            5 in tens = L, and (8 - 5) in tens = XXX
            80 = L prepended to XXX = LXXX

output
  - Roman numerals

*/

/* Examples 

The following examples were given with the problem as a test suite
*
/////////////////////////////

/* I added the following examples to test overflow, according to this program (numbers above 3000), and  bad input handling */

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
digits = number.toString().split('');
size = digits.length
digits.map(digit, idx) => to_roman_num()
  to_roman_num(digit) 
    digit = digit.toInt()
    if digit < 4
      return rom_num[10^(size - (idx - 1)]].repeat(digit)
    elsif digit = 4
      rom = rom_num[10^(size - (idx - 1)]] + rom_num[digit + 1 * position]
    elsif digit = 9
      rom = rom_num[10^(size - (idx - 1)]] + rom_num[10^(position + 1)]
    else 
      rom = rom_num[5 * 10^(size - (idx - 1)]] + rom_num[10^(size - (idx - 1)]].repeat(digit)
digits.join('');
*/

/* Code */

/*
 var digit;
  var idx = 0;
  var rom_num = '';

  while (number > 0) {
    digit = number % 10;
    number = parseInt(number / 10);
    console.log(number);

    rom_num = toRomNum(digit, 10**idx) + rom_num;
    idx += 1;
  }

  function toRomNum(digit, place_value) {
    if (digit === 0) {
      return ''
    } else if (digit < 4) {
      return romanDictionary[place_value.toString()].repeat(digit);
    } else if (digit === 4 || digit === 9) {
      return romanDictionary[place_value.toString()] + romanDictionary[((digit + 1) *  place_value).toString()];;
    } else {
      return romanDictionary[(5 *place_value).toString()] + romanDictionary[place_value.toString()].repeat(digit - 5);;
    }
  }
*/


var romanDictionary = { '1': 'I', '5': 'V', '10': 'X', '50': 'L', '100': 'C', '500': 'D', '1000': 'M' };


function toRoman(num) {
  if (!validInput(num)) return 'Invalid input';

  var digits = num.toString().split('');
  var last_idx = digits.length - 1;

  function validInput(num) {
    var digits = num => num.split('').every(chr => chr >= '0' && chr <= '9');

    if (typeof num === 'string') return digits(num) && Number(num) <= 3000;

    if (Number.isInteger(num)) return num > 0 && num <= 3000;
  }

  function digitToRomanNumeral(digit, idx) {
    var place_val = 10 **(last_idx - idx);
    var roman = num => romanDictionary[num.toString()];
    digit = Number(digit);

    if (digit === 0) {
      return ''
    } else if (digit < 4) {
      return roman(place_val).repeat(digit);
    } else if (digit === 4 || digit === 9) {
      return roman(place_val) + roman((digit + 1) *  place_val);
    } else {
      return roman(5 * place_val) + roman(place_val).repeat(digit - 5);
    }
  }
  
  return digits.map(digitToRomanNumeral).join('');
}

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

console.log(toRoman(3001)); // returns 'MMM'

console.log(toRoman(0)); // returns 'MMM'

console.log(toRoman('3000')); // returns 'MMM'

console.log(toRoman(-1)); // returns 'MMM'

console.log(toRoman('1a4')); // returns 'MMM'

console.log(toRoman('2089'));

console.log(toRoman([208]));