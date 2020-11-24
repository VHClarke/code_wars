/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
    var s = s.split(' ');

    var x = []; var y = 0;

    for (var i = 0; i < s.length; ++i){
        x = s[i];

    if (y == 0 || x.length < y){
        y = x.length;
      };
    };
  return y;
};
