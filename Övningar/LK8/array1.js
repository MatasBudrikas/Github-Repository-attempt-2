const arr = [5, 10, 80, 40];

console.log(math.max(...arr));
console.log(math.min(...arr));

arr.sort();

arr.sort(function (a, b) {
    return a - b;
})