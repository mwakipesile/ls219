
/*

Write a program that given a phrase can count the occurrences of each word in that phrase.

For example, if we count the words for the input "olly olly in come free", we should get:

olly: 2
in: 1
come: 1
free: 1

UNDERSTANING THE PROBLEM
INPUT 
- String of one or more words
- separated by one or more spaces and/or punctuations.
- Word contains alphanumeric characters and apostrophes only. All other characters, including quotation marks are to be ignored.
- Words are case insensitive. "WORD", "wOrD", and "word" are occurences of the same word

OUTPUT
An object with each word and its count as a key: value pair

DATA STRUCTURE
- Array: need to traverse to count word occurences
- Object: need to store property, i.e word count

ALGORITHM
- create object literal to store word count wordsCount = {};
- string.match(regex) or string.split(regex delimiters) into an array of words
- array = array.map(normalizeCase)
- array.forEach(word) increment wordsCount[word] by (or initiate to) 1;

*/

function wordCount(str) {
  if (typeof str !== 'string' || !/\w+/.test(str)) return 'Error: bad input';
  
  var words = str.toLowerCase().match(/(\w+(?<!'\w+)'\w+|\w+)/g);

  var incrementWordCount = (wordsCount, word) => { 
     wordsCount[word] = 1 + (wordsCount[word] | 0)
     return wordsCount;
  };

  return words.reduce(incrementWordCount, {});
}

console.log(wordCount('word'));
// returns { word: 1 }

console.log(wordCount('one of each')
// returns { one: 1, of: 1, each: 1 }

console.log(wordCount('one fish two fish red fish blue fish'));
// returns { one: 1, fish: 4, two: 1, red: 1, blue: 1 }

console.log(wordCount('all the kings horses and all the kings men'));
// returns { all: 2, the: 2, kings: 2, horses: 1, and: 1, men: 1 }

console.log(wordCount('car : carpet as java : javascript!!&@$%^&'));
// returns { car: 1, carpet: 1, as: 1, java: 1, javascript: 1 }

console.log(wordCount('one,two,three'));
// returns { one: 1, two: 1, three: 1 }

console.log(wordCount("one,\ntwo,\nthree"));
// returns { one: 1, two: 1, three: 1 }

console.log(wordCount('testing, 1, 2 testing'));
// returns { testing: 2, 1: 1, 2: 1 }

console.log(wordCount('go Go GO'));
// returns { go: 3 }

console.log(wordCount("First: don't laugh. Then: don't cry."));
// returns { 'first': 1, "don't": 2, 'laugh': 1, 'then': 1, 'cry': 1 }

console.log(wordCount("Joe can't tell between 'large' and large."));
// returns { 'joe': 1, "can't": 1, 'tell': 1, 'between': 1, 'large': 2, 'and': 1 }
