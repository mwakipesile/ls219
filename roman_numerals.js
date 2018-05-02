
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

    - for digits between 1 to 3

      - if it's in 1000s place, its roman equivalent is digit times 'M'
        - i.e 2 = MM, 1 = M, 3 = MMM

      - if it's in 100s place it's Roman equivalent is digit times 'C'
        e.g 2 = CC
      
      - if it's in 10s place it's Roman equivalent is digit times 'X'
        e.g 3 = 'XXX'
      
      - if it's in 1s place it's Roman equivalent is digit times 'X'
        e.g 1 = 'I'

    - for digits 4, and 9, their Roman equivalent are:
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

    - for digits between 6 and 8, their Roman equivalent 
      Roman 5 prepended to Roman (digit - 5) in digits place value

      - example
          80
            is in tens,
            5 in tens = L, and (8 - 5) in tens = XXX
            80 = L prepended to XXX = LXXX

output
  - Roman numerals


*/


console.log(toRoman(1); // returns 'I' 

console.log(toRoman(2); // returns 'II' 

console.log(toRoman(3); // returns 'III' 

console.log(toRoman(4); // returns 'IV' 

console.log(toRoman(5); // returns 'V'

console.log(toRoman(6); // returns 'VI' 

console.log(toRoman(9); // returns 'IX'

console.log(toRoman(27); // returns 'XXVII' 

console.log(toRoman(48); // returns 'XLVIII'

console.log(toRoman(59); // returns 'LIX'

console.log(toRoman(93); // returns 'XCIII'

console.log(toRoman(141); // returns 'CXLI'

console.log(toRoman(163); // returns 'CLXIII'

console.log(toRoman(402); // returns 'CDII'

console.log(toRoman(575); // returns 'DLXXV'

console.log(toRoman(911); // returns 'CMXI'

console.log(toRoman(1024); // returns 'MXXIV'

console.log(toRoman(3000); // returns 'MMM'

