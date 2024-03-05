// function factorialZero(input) {
//     if(input == 0 || input == 1) {
//         return 0;
//     }

//     var result = 1;

//     for(i = 1; i <= input; i++) {
//         result *= i;
//     }

//     var abc = result.toString();

//     console.log(abc);

//     var numberOfZero = 0;

//     for(i = abc.length - 1; i >= 0; i--) {
//         if(abc[i] == 0) {
//             numberOfZero += 1;
//         } else {
//             break;
//         }
//     }
    
//     return numberOfZero;
// }

// factorialZero(2)

// console.log(factorialZero(0));
// console.log(factorialZero(1));
// console.log(factorialZero(2));
// console.log(factorialZero(6));
// console.log(factorialZero(7));

// function factorialNewZero(input) {
//     let fact = 1;

//     for(i = 2; i <= input; i++) {
//         fact = fact * i;
//     }

//     let res = 0;

//     while(fact % 10 === 0) {
//         res++;
//         fact = fact / 10;
//     }

//     return res;
// }
// console.log(factorialNewZero(10));

// Trailing zero count by using formula

function trailingZeroFormula(input) {
    var numberOfZero = 0;

    for(i = 5; i <= input; i *= 5) {
        numberOfZero += Math.floor(input / i);
    }

    return numberOfZero;
}

console.log(trailingZeroFormula(25));
console.log(trailingZeroFormula(251));