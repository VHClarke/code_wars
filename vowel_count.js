/*
We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

//Using .replace() method by replacing anything that isn't a vowel with an empty string (basically it will delete those characters) and returning the new string length:



function vowelCount(str) {
  return str.replace(/[^aeiou]/gi, "").length;
};

//ES6

const vowelCount = (str) => ( str.replace(/[^aeiou]/gi,"").length )
