let s = parseFloat(prompt("Зайг оруулна уу (км):"));
let v1 = 25; 
let v2 = 18; 
let v_relative = v1 - v2; 

let t_hours = s / v_relative;
let t_seconds = t_hours * 3600;

let minutes = Math.floor(t_seconds / 60);
let seconds = Math.floor(t_seconds % 60);

console.log(`${minutes} минут ${seconds} секундын дараа гүйцнэ.`);
