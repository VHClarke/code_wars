/*Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.*/

function findOdd(A) {
   let temp = 0;
   let i = 0
  while(i < A.length){
    for(let j=0; j <A.length; j++){
      if(A[i] === A[j]){
        temp ++
      }
    }
    if(temp % 2 !== 0) {
      return A[i]
    }
    i++
  }
}
