/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

var grow = (x) => {

let newArray = 1

  for( let i=0; i < x.length; i++){
    
    newArray = newArray * x[i];
  
    }  
return newArray
}

/*
Test.describe("Example tests",_=>{
Test.assertEquals(grow([1, 2, 3]), 6);
Test.assertEquals(grow([4, 1, 1, 1, 4]), 16); 
Test.assertEquals(grow([2, 2, 2, 2, 2, 2]), 64); 
})

*/
