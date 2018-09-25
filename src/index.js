module.exports = function getZerosCount(number) {
  
  var divider = 5;
  var pieces = [];
  
  while (number / divider > 1) {
      
      fragment = number / divider;
      divider = divider * 5;
      pieces.push(Math.floor(fragment));
  
}

var sum = 0;
for (var i = 0; i < pieces.length; i++) {
 
    sum = sum + pieces[i];
}
return sum;

}