let value1 = prompt("First value?")
let value2 = prompt("Second value?")

value1 = Number(value1);
value2 = Number.parseInt(value2, 10);

const med = (value1 + value2) / 2;

alert("Medium: " + med);