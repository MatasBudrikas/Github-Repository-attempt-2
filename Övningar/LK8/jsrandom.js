let num1 = (Math.random() * 10 + 1);
let num2 = (Math.random() * 10 + 1);
let num3 = (Math.random() * 10 + 1);
let T1 = Number.parseInt(num1);
let T2 = Number.parseInt(num2);
let T3 = Number.parseInt(num3);
const A1 = (Math.round(T1 * 100));
const A2 = (Math.round(T2 * 100));
const A3 = (Math.round(T3 * 100));
let RNDNUM = (A1, A2, A3);
let NUMS = (num1, num2, num3);
const box1 = document.getElementById("box1")
const pastetest = RNDNUM(NUMS);
const numpaste = document.createElement('p');
numpaste.textContent = pastetest;
box1.appendChild("box1");