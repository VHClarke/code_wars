/*
Write a function which calculates the average of the numbers in a given list.
*/
function find_average(array) {
  return array.reduce((a, b) => a + b, 0) / array.length;
}
//test
Test.assertEquals(find_average([1,1,1]), 1);
Test.assertEquals(find_average([1,2,3]), 2);
