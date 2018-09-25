module.exports = function getZerosCount(number) {
  
  var divider = 5;
  var pieces = [];
  
  while (number / divider > 0) {
      
      fragment = number / divider;
      divider = divider * 5;
      pieces.push(Math.round(fragment));
      
  
}

//console.log(pieces);

var sum = 0;
for (var i = 0; i < pieces.length; i++) {
    
    sum = sum + pieces[i];

}
return sum;
//console.log(sum);

}