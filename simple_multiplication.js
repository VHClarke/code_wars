/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

function simpleMultiplication(number) {
  
  let value
  
  if (number % 2 == 0) {
    
    value = number * 8
    
    return value
    
  }
  
  else {
    value = number * 9

    return value
  }
  
}
