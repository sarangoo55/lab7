function isDigitSumPalindrome(number) {
    let sum = number.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    let sumStr = sum.toString();
    let reversed = sumStr.split('').reverse().join('');
    return sumStr === reversed;
}

// Гараас утга авах
let input = prompt("Тоогоо оруулна уу:");
input = parseInt(input); // string -> number

if (!isNaN(input)) {
    if (isDigitSumPalindrome(input)) {
        console.log(`Тооны цифрийн нийлбэр палимдром байна`);
    } else {
        console.log(`Тооны цифрийн нийлбэр палимдром биш`);
    }
} else {
    console.log("Зөв тоо оруулна уу");
}
