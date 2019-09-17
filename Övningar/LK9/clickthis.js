
//var count1 = 1
//function setColor(id, color) {
// const p = document.getElementById(id);
// p.style.color = color;
// if (count1 == 0) {
//     property.style.backgroundColor = gold;
//     count1 = 1;
// }

// if (count1 == 1) {
//     count1 = 2;
// }
// else {
//     count1 = 0;
// }
//}

function togglePassword() {
    var input = document.getElementById("PSWTXT");

    switch (input.type) {
        case "password": {
            input.type = "text";
            break;
        }
        case "text": {
            input.type = "password";
            break;
        }
        default: {
            console.error("Unknown");
            break;
        }
    }
}

function setColor(id, color) {
    const p = document.getElementById(id);
    p.style.color = color;
}

function multibutton() {
    var button = document.getElementById("RGBswitch");
    switch (col.back.btnname) {
        case "red":
            col.back = Color.White;
            break;
    }

}

let t1 = document.getElementById("text1");
t1.style.color = "darkblue";

