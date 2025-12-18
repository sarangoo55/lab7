let door = parseInt(prompt("Хаалганы дугаар:"));
const floors = 9;
const units = 4;
const perEntrance = floors * units; 

let entrance = Math.ceil(door / perEntrance);
let remaining = (door - 1) % perEntrance;
let floor = Math.floor(remaining / units) + 1;
let unitInFloor = (remaining % units) + 1;

console.log(`${entrance}-р орц, ${floor}-р давхар, ${unitInFloor}-дахь хаалга`);
