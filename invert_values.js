
/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.
*/
function invert(array) {
  // Return additive inverse ex: 5 + -5 = 0
 return array.map(num => num * -1)
}

// tests
describe("Invert array values", function(){
  it("Basic Tests", function(){
    Test.assertDeepEquals(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
    Test.assertDeepEquals(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
    Test.assertDeepEquals(invert([]), []);
    Test.assertDeepEquals(invert([0]), [0]);
  });
});
