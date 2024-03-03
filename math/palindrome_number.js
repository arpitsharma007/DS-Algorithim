function checkPalindrome(input) {
  var x = Number(input.toString().split("").reverse().join(""));
  if (input === x) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome(55455));
