/*
Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.
*/

function parseF(s) {

   const parsed = Number.parseFloat(s)

   if (Number.parseFloat(parsed)) {
    return parsed;
  }
   else if(parsed===0){
     return 0
   }
  else return null;
}
