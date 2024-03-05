// // Iterative way
// function factorial(input) {
//     if(input == 0 || input == 1) {
//         return 1;
//     }

//     var result = 1;

//     for(i = 1; i <= input; i++) {
//         result *= i;
//     }
//     return result;
// }

// Recursive way
function factorial(input) {
    if(input === 0) return 1;
    return input * factorial(input - 1)
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(6));
console.log(factorial(7));