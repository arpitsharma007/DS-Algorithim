function countDigit(input) {
  var x = 0;
  while (input != 0) {
    x++;
    input = Math.floor(input / 10);
  }
  return x;
}

console.log(countDigit(524578));
