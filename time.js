let n = parseFloat(prompt("Тоо оруулна уу:"));
let hour = new Date().getHours();

if (hour >= 6 && hour < 12) {
    console.log("Өглөө байна. 2 зэрэг:", Math.pow(n, 2));
} else {
    console.log("Орой байна. Язгуур:", Math.sqrt(n).toFixed(2));
}
