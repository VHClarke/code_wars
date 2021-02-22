/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 >> [5,4,3,2,1]


*/
const reverseSeq = n => {
  return new Array(n).fill(0).map((_, i) => i + 1).reverse();
};
/*

Tests

const { assert } = require("chai");

describe("reverseSeq", function() {
  it("Sample Test", function() {
    assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
  });
});
*/
