/*Questions to practice:
Use array methods - try solving in one line for each using ES6+ (is it possible?)
One:
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

const array = new Array(1,2,3,4)

array.reduce((a,b)=> a*b)



/*Two:You will be given an array of all the rfamily members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].
Example [0, 20, 25]
*/
let array1 = new Array (0,15,34,20,8)

array1.sort((a,b)=> a-b)

let youngest = array1[0]
let oldest = array1[array1.length-1]

let difference = oldest - youngest

let newArray = [youngest, oldest, difference]
console.log(newArray)

/*
Three:
Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
Example:
[ 6, 2, 1, 8, 10 ] => 16
[ 1, 1, 11, 2, 3 ] => 6
Use string methods - try solving in one line for each using ES6+ (is it possible?)
*/


//---------------------------------- Sting methods


/*One:
Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/




/*Two:
Create a function that alternates the case of a given string.
Ex. HeLLo WoRLd => hEllO wOrlD
*/

/*
Three:
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
Ex. Input: "aa", "bb" , "cc" => Output: "abcabc"
Ex. Input: "qwe", "kcx" , "hwq" => Output: "qkhwcwexq"
Note: You can expect all of the inputs to be the same length.
*/
