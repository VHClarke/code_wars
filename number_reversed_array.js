
/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]
*/

function digitize(n) {
const arrayOfDigits = Array.from(String(n), Number);
return arrayOfDigits.reverse();
}


//test
Test.assertDeepEquals(digitize(35231),[1,3,2,5,3]);
