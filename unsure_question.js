/*
Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)
*/



function ensureQuestion(s) {
    if (s.endsWith('?')) {
      return s
    } else {
      return s.concat('?')
    }
}


/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Ensure question", () => {
  it("Fixed tests", () => {
    assert.strictEqual(ensureQuestion(""),"?","Expected: '?'");
    assert.strictEqual(ensureQuestion("Yes"),"Yes?","Expected: '?'");
    assert.strictEqual(ensureQuestion("No?"),"No?","Expected: '?'");
  });
});
*/
