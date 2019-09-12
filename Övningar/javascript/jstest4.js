const cars = newFunction();
cars[0] = "Volvo";
cars.push(" Mercedes");
document.getElementById("test").innerHTML = cars[0];
//cars[1] = Saab;
//cars[2] = Tesla;

console.log(cars.length);
alert("Order: " + cars);

const str = "1";
function newFunction() {
    const cars = [" Volvo", " Saab", " Tesla"];
    var list = new Array(" Volvo", " Saab", " Tesla");
    return cars;
}

