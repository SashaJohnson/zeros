module.exports = function getZerosCount(number) {
  
  var divider = 5;
  var piecesRaw = [];
  var pieces = [];
  
  while (number / divider > 1) {
      
      fragment = number / divider;
      divider = divider * 5;
      piecesRaw.push(fragment);
      pieces.push(Math.floor(fragment));
  
}

console.log(piecesRaw);
console.log(pieces);


var sum = 0;
for (var i = 0; i < pieces.length; i++) {
    
    sum = sum + pieces[i];

}
return sum;
//console.log(sum);

}