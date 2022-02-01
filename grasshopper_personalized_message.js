/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
*/

function greet (name, owner) {
  // Add code here
  if(name == owner){
    return "Hello boss"
  }

  else {
    return"Hello guest"
  }
}

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')
  });
});
