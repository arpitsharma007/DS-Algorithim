// function gcd(a, b) {
//     var smallestNumber =  a < b ? a : b;

//     for(i = smallestNumber; i > 0; i--) {
//         if(a % i === 0 && b % i === 0) {
//             return i;
//             break;
//         }
//     }
//     return 1;
// }

function gcd(a, b) {
    if(b === 0) {
        return a;
    }
    
    return a > b ? gcd(a, a % b) : gcd(b, b % a)
}

console.log(gcd(10, 5));