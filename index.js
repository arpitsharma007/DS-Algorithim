console.log("Hello World");

let sum = 0;

function hello (n) {
    for(i=1; i <= n; i++) {
        sum += i;
        console.log(sum);
    }

    return sum;
}

console.log(hello(3));
