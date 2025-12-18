let numbers = [12, 15, 20, 30, 10]; 

function getGCD(a, b) {
    while (b) {
        a %= b;
        [a, b] = [b, a];
    }
    return a;
}

function getLCM(a, b) {
    return (a * b) / getGCD(a, b);
}

let result = numbers.reduce((acc, curr) => getLCM(acc, curr));
console.log("5 тооны ХБЕХ бол:", result);
