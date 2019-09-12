let value1 = prompt("Input first value.")
let value2 = prompt("Input second value.")
let value3 = prompt("Input final value.")

value1 = Number(value1);
value2 = Number(value2);
value3 = Number.parseInt(value3);

const medium = (value1 + value2 + value3) / 3;

alert("Medium value: " + medium);