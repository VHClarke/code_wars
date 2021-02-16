
/*
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples
basicOp('+', 4, 7)         // Output: 11
basicOp('-', 15, 18)       // Output: -3
basicOp('*', 5, 5)         // Output: 25
basicOp('/', 49, 7)        // Output: 7
*/

// function does 4 basic mathematical ops
// first agrument is a string
// second and third agrument is a interger

function basicOp(operation, value1, value2) {
  let add   = value1 + value2
  let sub   = value1 - value2
  let multi = value1 * value2
  let div   = value1 / value2

  if(operation === '+'){
    return add
  }
  else if (operation === '-'){

    return sub
  }
  else if (operation === '*'){

    return multi

  } else {

    return div

  }

  //tests

  console.log("Basic tests\n");
  Test.assertSimilar(basicOp('+', 4, 7), 11);
  Test.assertSimilar(basicOp('-', 15, 18), -3);
  Test.assertSimilar(basicOp('*', 5, 5), 25);
  Test.assertSimilar(basicOp('/', 49, 7), 7);
  
