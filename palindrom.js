let num = prompt("Тоо оруулна уу:");
let sum = 0;

for (let char of num) {
    sum += parseInt(char);
}

let sumStr = sum.toString();
let reversedSum = sumStr.split('').reverse().join('');

if (sumStr === reversedSum) {
    console.log(`Нийлбэр ${sum} нь палиндром МӨН.`);
} else {
    console.log(`Нийлбэр ${sum} нь палиндром БИШ.`);
}
