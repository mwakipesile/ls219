wordCount('word');
// returns { word: 1 }

wordCount('one of each')
// returns { one: 1, of: 1, each: 1 }

wordCount('one fish two fish red fish blue fish');
// returns { one: 1, fish: 4, two: 1, red: 1, blue: 1 }

wordCount('all the kings horses and all the kings men');
// returns { all: 2, the: 2, kings: 2, horses: 1, and: 1, men: 1 }

wordCount('car : carpet as java : javascript!!&@$%^&');
// returns { car: 1, carpet: 1, as: 1, java: 1, javascript: 1 }

wordCount('one,two,three');
// returns { one: 1, two: 1, three: 1 }

wordCount("one,\ntwo,\nthree");
// returns { one: 1, two: 1, three: 1 }

wordCount('testing, 1, 2 testing');
// returns { testing: 2, 1: 1, 2: 1 }

wordCount('go Go GO');
// returns { go: 3 }

wordCount("First: don't laugh. Then: don't cry.");
// returns { 'first': 1, "don't": 2, 'laugh': 1, 'then': 1, 'cry': 1 }

wordCount("Joe can't tell between 'large' and large.");
// returns { 'joe': 1, "can't": 1, 'tell': 1, 'between': 1, 'large': 2, 'and': 1 }
